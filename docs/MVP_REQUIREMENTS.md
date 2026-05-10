# MVP Requirements

## 1. MVP Goal

The goal of the MVP is to build the first usable version of the Side Project Feedback Platform.

This version focuses on the core workflow:

1. Developers publish their side projects.
2. Users browse side projects.
3. Users submit structured feedback.
4. Developers review received feedback.

The MVP does not need to include advanced community features, AI analysis, ranking systems, or complex dashboards yet.

---

## 2. User Roles

### 2.1 Project Creator

A project creator is a developer, student, indie hacker, or small team member who wants to publish a side project and collect feedback.

The creator should be able to:

- Publish a project.
- Provide project information.
- Define what kind of feedback they want.
- View submitted feedback.

### 2.2 Feedback User

A feedback user is a person who browses projects and provides feedback.

The feedback user should be able to:

- Browse published projects.
- View project details.
- Try the project through a demo or GitHub link.
- Submit structured feedback.

---

## 3. Core MVP Features

### 3.1 Project Listing

Users should be able to view a list of published projects.

Each project card should display:

- Project title
- Short description
- Tags
- Feedback type requested
- GitHub link or demo link

### 3.2 Project Detail Page

Users should be able to view detailed information about a project.

The detail page should display:

- Project title
- Full description
- Problem the project solves
- Target users
- Current development stage
- GitHub repository link
- Demo link
- Requested feedback types
- Feedback submission form

### 3.3 Project Submission

Project creators should be able to submit a project.

The submission form should include:

- Project title
- Short description
- Full description
- GitHub repository link
- Demo link
- Tags
- Target users
- Current development stage
- Requested feedback types

### 3.4 Structured Feedback Submission

Feedback users should be able to submit feedback for a project.

The feedback form should include:

- Overall rating
- Usability rating
- Usefulness rating
- Clarity rating
- Positive feedback
- Improvement suggestions
- Would you use this project?
- Additional comments

### 3.5 Feedback Review

Project creators should be able to view feedback submitted to their projects.

Each feedback record should display:

- Ratings
- Written feedback
- Submission time
- Whether the user would use the project

---

## 4. Out of Scope for MVP

The following features will not be included in the first MVP version:

- AI feedback summarization
- User reputation system
- Project ranking system
- Notification system
- Payment system
- Team collaboration
- Advanced analytics dashboard
- GitHub OAuth login
- Public roadmap feature
- Comment threads
- Private messaging

These features can be considered after the core workflow is completed.

---

## 5. Initial Pages

The MVP should include the following pages:

### 5.1 Home Page

Purpose:

Introduce the platform and explain its value.

Main content:

- Platform slogan
- Brief explanation
- Call-to-action buttons
- Featured or recent projects

### 5.2 Project List Page

Purpose:

Allow users to browse projects.

Main content:

- Project cards
- Search or filter options
- Tags
- Basic project information

### 5.3 Project Detail Page

Purpose:

Allow users to understand a project and submit feedback.

Main content:

- Project information
- GitHub/demo links
- Feedback request
- Feedback form

### 5.4 Submit Project Page

Purpose:

Allow creators to publish a project.

Main content:

- Project submission form
- Required fields
- Submit button

### 5.5 Feedback Dashboard Page

Purpose:

Allow creators to review feedback.

Main content:

- List of received feedback
- Ratings
- Comments
- Basic summary

---

## 6. Suggested Data Models

### 6.1 Project

A project should include:

- id
- title
- shortDescription
- fullDescription
- githubUrl
- demoUrl
- tags
- targetUsers
- developmentStage
- feedbackTypes
- createdAt
- updatedAt

### 6.2 Feedback

A feedback record should include:

- id
- projectId
- overallRating
- usabilityRating
- usefulnessRating
- clarityRating
- positiveFeedback
- improvementSuggestions
- wouldUse
- additionalComments
- createdAt

---

## 7. MVP Completion Criteria

The MVP can be considered complete when:

- A creator can submit a project.
- A user can browse project cards.
- A user can open a project detail page.
- A user can submit structured feedback.
- A creator can view submitted feedback.
- The main data can be stored and retrieved successfully.
- The project can run locally with clear setup instructions.

---

## 8. Development Priority

Recommended development order:

1. Create frontend page layout.
2. Create mock project data.
3. Build project list page.
4. Build project detail page.
5. Build feedback form.
6. Build project submission form.
7. Set up backend API.
8. Set up database.
9. Connect frontend with backend.
10. Build basic feedback dashboard.

---

## 9. Current MVP Status

Current status:

- Project idea defined
- README completed
- Basic folder structure created
- MVP requirements being defined