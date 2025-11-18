#!/bin/bash

# Teamplay Development Helper Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_success "Docker and Docker Compose are installed"
}

# Build and start services
start_services() {
    print_status "Building and starting services..."
    docker-compose up --build -d
    
    print_status "Waiting for services to be ready..."
    sleep 5
    
    # Check if backend is responding
    if curl -s http://localhost:8000/health > /dev/null; then
        print_success "Backend is running at http://localhost:8000"
        print_status "API Documentation: http://localhost:8000/docs"
    else
        print_warning "Backend might not be ready yet. Please wait a moment."
    fi
    
    # Check if frontend is responding
    if curl -s http://localhost:3000 > /dev/null; then
        print_success "Frontend is running at http://localhost:3000"
    else
        print_warning "Frontend might not be ready yet. Please wait a moment."
    fi
    
    print_success "Services started successfully!"
    print_status "Run 'docker-compose logs -f' to view logs"
}

# Stop services
stop_services() {
    print_status "Stopping services..."
    docker-compose down
    print_success "Services stopped"
}

# Show logs
show_logs() {
    docker-compose logs -f
}

# Clean up (remove containers and images)
cleanup() {
    print_status "Cleaning up containers and images..."
    docker-compose down --rmi all --volumes --remove-orphans
    print_success "Cleanup complete"
}

# Development mode (with hot reload)
dev_mode() {
    print_status "Starting in development mode..."
    
    # Check if development services are configured
    if grep -q "frontend-dev" docker-compose.yml; then
        print_status "Using development configuration with hot reload"
    else
        print_warning "Development configuration not found. Using production build."
    fi
    
    docker-compose up --build
}

# Show help
show_help() {
    echo "Teamplay Development Helper"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start    Build and start all services in background"
    echo "  stop     Stop all services"
    echo "  dev      Start in development mode (foreground with logs)"
    echo "  logs     Show service logs"
    echo "  clean    Stop services and remove containers/images"
    echo "  help     Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start     # Start services"
    echo "  $0 logs      # View logs"
    echo "  $0 stop      # Stop services"
    echo ""
}

# Main script logic
case "${1:-help}" in
    start)
        check_docker
        start_services
        ;;
    stop)
        stop_services
        ;;
    dev)
        check_docker
        dev_mode
        ;;
    logs)
        show_logs
        ;;
    clean)
        cleanup
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac