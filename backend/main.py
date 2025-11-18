from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from datetime import datetime
import json

# Create FastAPI app
app = FastAPI(
    title="Teamplay API",
    description="Backend API for Teamplay Dashboard built with FastAPI 0.121.2",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://frontend:3000"],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class User(BaseModel):
    id: int
    name: str
    email: str
    role: str
    avatar: Optional[str] = None
    created_at: datetime

class DashboardStats(BaseModel):
    total_users: int
    total_projects: int
    active_sessions: int
    revenue: float

class Project(BaseModel):
    id: int
    name: str
    description: str
    status: str
    progress: int
    created_at: datetime
    team_size: int

# Sample data
sample_users = [
    User(
        id=1,
        name="John Doe",
        email="john@example.com",
        role="Admin",
        avatar="/avatars/john.jpg",
        created_at=datetime.now()
    ),
    User(
        id=2,
        name="Jane Smith",
        email="jane@example.com",
        role="Developer",
        avatar="/avatars/jane.jpg",
        created_at=datetime.now()
    ),
    User(
        id=3,
        name="Bob Johnson",
        email="bob@example.com",
        role="Designer",
        avatar="/avatars/bob.jpg",
        created_at=datetime.now()
    )
]

sample_projects = [
    Project(
        id=1,
        name="E-commerce Platform",
        description="Building a modern e-commerce platform with Next.js and FastAPI",
        status="In Progress",
        progress=75,
        created_at=datetime.now(),
        team_size=5
    ),
    Project(
        id=2,
        name="Mobile App",
        description="Cross-platform mobile application using React Native",
        status="Planning",
        progress=25,
        created_at=datetime.now(),
        team_size=3
    ),
    Project(
        id=3,
        name="Analytics Dashboard",
        description="Real-time analytics dashboard for business intelligence",
        status="Completed",
        progress=100,
        created_at=datetime.now(),
        team_size=4
    )
]

# API Routes
@app.get("/")
async def root():
    return {"message": "Welcome to Teamplay API", "version": "1.0.0", "fastapi_version": "0.121.2"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now()}

@app.get("/api/users", response_model=List[User])
async def get_users():
    """Get all users"""
    return sample_users

@app.get("/api/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    """Get a specific user by ID"""
    user = next((user for user in sample_users if user.id == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.get("/api/dashboard/stats", response_model=DashboardStats)
async def get_dashboard_stats():
    """Get dashboard statistics"""
    return DashboardStats(
        total_users=len(sample_users),
        total_projects=len(sample_projects),
        active_sessions=42,
        revenue=125430.50
    )

@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    """Get all projects"""
    return sample_projects

@app.get("/api/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    """Get a specific project by ID"""
    project = next((project for project in sample_projects if project.id == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@app.post("/api/projects", response_model=Project)
async def create_project(project: Project):
    """Create a new project"""
    # In a real app, you'd save to a database
    new_project = project
    new_project.id = len(sample_projects) + 1
    sample_projects.append(new_project)
    return new_project

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )