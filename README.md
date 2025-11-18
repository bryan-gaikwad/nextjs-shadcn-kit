# Teamplay - Full Stack Application

A modern full-stack application built with **Next.js** (frontend) and **FastAPI** (backend), containerized with Docker.

## 🚀 Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed
- Git

### 1. Clone and Start
```bash
git clone <your-repo-url>
cd teamplay
docker-compose up --build
```

### 2. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs (FastAPI Swagger UI)

## 📁 Project Structure

```
teamplay/
├── backend/                 # FastAPI Backend
│   ├── main.py             # Main FastAPI application
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile          # Backend Docker configuration
│   └── .env               # Backend environment variables
├── frontend/               # Next.js Frontend
│   ├── app/               # Next.js 13+ app directory
│   ├── components/        # React components
│   ├── package.json       # Node.js dependencies
│   ├── Dockerfile         # Frontend Docker configuration
│   ├── Dockerfile.dev     # Development Docker configuration
│   └── .env.local        # Frontend environment variables
└── docker-compose.yml     # Docker services orchestration
```

## 🛠️ Development Setup

### Backend (FastAPI)
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
python main.py
# or
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend (Next.js)
```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🐳 Docker Commands

### Production Build
```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

### Development with Hot Reload
```bash
# Use development configuration (uncomment frontend-dev in docker-compose.yml)
# This provides hot reload for frontend development
docker-compose up --build
```

### Individual Services
```bash
# Backend only
docker-compose up backend

# Frontend only
docker-compose up frontend
```

## 🔌 API Integration

The application demonstrates a complete API integration pattern:

### Backend Endpoints
- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get specific user
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get specific project
- `POST /api/projects` - Create new project

### Frontend Integration
- **API Demo Page**: `/api-demo` - Showcases live data fetching
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: Proper loading indicators
- **Real-time Updates**: Refresh button to fetch latest data

## 🌐 Environment Variables

### Backend (.env)
```bash
DATABASE_URL=sqlite:///./teamplay.db
SECRET_KEY=your-secret-key-change-this-in-production
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=True
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=Teamplay Dashboard
NEXT_PUBLIC_VERSION=1.0.0
NODE_ENV=development
```

## 🔧 Customization

### Adding New API Endpoints

1. **Backend**: Add new routes in `backend/main.py`
```python
@app.get("/api/your-endpoint")
async def your_endpoint():
    return {"message": "Your data"}
```

2. **Frontend**: Create components that fetch from your endpoints
```javascript
const response = await fetch(`${API_BASE_URL}/api/your-endpoint`)
const data = await response.json()
```

### Database Integration
The current setup uses in-memory data. To add a database:

1. Add database dependencies to `requirements.txt`
2. Configure database connection in `backend/main.py`
3. Create database models using SQLAlchemy or your preferred ORM

## 🚦 Features Demonstrated

- ✅ **Full-Stack Architecture**: Separated backend and frontend
- ✅ **Docker Containerization**: Easy deployment and development
- ✅ **API Integration**: Complete CRUD operations
- ✅ **Error Handling**: Robust error states and user feedback
- ✅ **Modern UI**: Styled with shadcn/ui components
- ✅ **Type Safety**: Pydantic models for API validation
- ✅ **CORS Configuration**: Proper cross-origin setup
- ✅ **Development Workflow**: Hot reload for both services

## 📈 Performance

### Production Optimizations
- Next.js static optimization
- FastAPI automatic OpenAPI documentation
- Docker multi-stage builds for smaller images
- Environment-specific configurations

### Development Features
- Hot reload for both frontend and backend
- Comprehensive error messages
- API documentation with Swagger UI
- Volume mounts for live code updates

## 🛡️ Security Considerations

- Environment variables for sensitive data
- CORS properly configured
- Input validation with Pydantic
- Production secrets management (update before deployment)

## 📚 Tech Stack

### Backend
- **FastAPI** 0.121.2 - Modern Python web framework (latest version)
- **Uvicorn** 0.34.0 - ASGI server
- **Pydantic** 2.10.4 - Data validation
- **Python** 3.12

### Frontend
- **Next.js** 16.0.1 - React framework
- **React** 19.2.0 - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-service orchestration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test with Docker
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).