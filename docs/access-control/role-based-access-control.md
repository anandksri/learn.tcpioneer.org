# RBAC (Role-Based Access Control)

- It is a structured way to control who can access the kind of content inside a system or a network.
- Instead of assigning permissions to every individual user, RBAC assigns roles and these roles determine what actions someone can perform.

---

### Why Roles Matter:

- A regular employee might only view certain files.
- A manager can access reports and oversee team data.
- An admin manages users, settings, and system-level controls.

---

### Why RBAC is Important:

1. **Protects Sensitive Data**
   - RBAC enforces the Principle of Least Privilege.
   - Prevents:
     - Accidental exposure
     - Internal misuse
     - Damage from compromised accounts

2. **Simplifies Access Management**
   - Onboarding → assign a role
   - Offboarding → remove the role
   - Job change → update role
   - Temporary access becomes controlled

3. **Supports Compliance**
   - Tracks:
     - Who accessed what
     - What they changed
     - When it happened

---

### How RBAC works

- RBAC structure:

- **User → Role → Permissions**
  - Permissions are never given directly to users
  - Everything flows through roles

- Roles consider:
  - Authority
  - Responsibility
  - Competency
  - Job function

- Flexible access:
  - Read-only
  - Time-bound
  - Overlapping roles
  - Multi-level access

---

### NIST’s Three Core Rules of RBAC

- **Role Assignment** → User must have a role
- **Role Authorization** → Role must be approved
- **Permission Authorization** → Permissions belong to roles

---

### The Four RBAC Models

- **Core RBAC (Flat RBAC)**
  - Basic model: Users → Roles → Permissions
  - No hierarchy

- **Hierarchical RBAC**
  - Roles inherit permissions
  - Example hierarchy:
    - Executive
    - Manager
    - Supervisor
    - Employee

- **Constrained RBAC**
  - Introduces Separation of Duties (SoD)
  - Prevents fraud and conflicts

- **Symmetric RBAC**
  - Advanced enterprise model
  - Enables auditing and visibility

---

### Vulnerabilities to look after in this Access Control

- **Privilege Escalation**
  - Impact: Admin-level access by attackers
  - Example: Employee accessing admin dashboard

- **Horizontal Access Control Bypass**
  - Impact: Access to other users' data
  - Example: Employees accessing each other's data

- **Vertical Access Control Bypass**
  - Impact: Lower users performing admin actions

- **Missing Authorization Checks**
  - Impact: Any user performing restricted actions

- **Temporary or Special Access Flaws**
  - Impact: Long-term unauthorized access
  - Example: Contractor account still active

- **Role Hierarchy Bugs**
  - Impact: Mid-level roles gaining admin access

- **Separation of Duties Violations**
  - Impact: Fraud / abuse
  - Example: Same person approves & submits

- **IDOR via Roles**
  - Impact: Unauthorized data access
  - Example: Changing user ID in URL

