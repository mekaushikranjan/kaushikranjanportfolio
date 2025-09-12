# Replit.md

## Overview

This is a full-stack portfolio website application built for Kaushik Ranjan, showcasing modern web development practices. The application features a React frontend with TypeScript, an Express.js backend, and uses Drizzle ORM for database operations with PostgreSQL. The portfolio includes sections for about, education, skills, projects, and contact functionality with form submission capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Library**: Radix UI components with shadcn/ui for consistent design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for request validation
- **Development**: Hot reloading with tsx for development server

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Management**: Centralized schemas in `/shared` directory
- **Database Migrations**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless driver for PostgreSQL connections

### API Design
- **Contact Form Endpoint**: `POST /api/contact` for form submissions
- **Admin Endpoint**: `GET /api/contact` for retrieving contact messages
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Validation**: Request body validation using Zod schemas

### Development Workflow
- **Build System**: Vite for frontend, ESBuild for backend bundling
- **Development Server**: Concurrent frontend (Vite) and backend (tsx) development
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Hot Reloading**: Full-stack hot reloading in development mode

### Storage Architecture
- **Production**: PostgreSQL database with Drizzle ORM
- **Development**: In-memory storage implementation for rapid development
- **Interface**: Abstract storage interface allowing easy switching between implementations

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database operations and migrations

### UI & Design System
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Type safety across the entire application
- **Vite**: Fast development server and build tool
- **ESBuild**: Fast JavaScript bundler for production builds
- **Wouter**: Lightweight routing library for React

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for TypeScript
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### External Services
- **Google Fonts**: Typography (Poppins, Inter, DM Sans, Fira Code, Geist Mono)
- **Unsplash**: Stock photography for portfolio images and placeholders
- **Replit**: Development environment with live preview capabilities