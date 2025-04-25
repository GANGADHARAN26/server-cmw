# Job Admin Dashboard Backend

A Node.js backend application for managing job listings with MongoDB and Mongoose.

## Features

- CRUD operations for job listings
- Pagination support
- MongoDB integration
- RESTful API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `POST /api/jobs` - Create a new job
- `GET /api/jobs` - Get all jobs (with pagination)
- `GET /api/jobs/:id` - Get a single job
- `PUT /api/jobs/:id` - Update a job
- `DELETE /api/jobs/:id` - Delete a job

### Pagination Parameters

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

## Job Schema

```javascript
{
  jobTitle: String,
  companyName: String,
  location: String,
  jobType: String, // Full-time, Part-time, Contract, Internship
  salaryRange: String,
  jobDescription: String,
  requirements: String,
  responsibilities: String,
  applicationDeadline: Date
}
``` 