# ABAC(Attribute-Based Access Control)

- ABAC is dynamic and flexible access control model that decides access based on attributes not fixed roles.
- Instead of assigning permissions through predefined roles, ABAC evaluates multiple attributes about the user, the resource, the action and the environment to determine whether access should be allowed,
- This creates fine-grained, context aware decisions that go beyond job titles or static permissions.

### Why Attributes Matter:

- A user from the Finance department can access invoices only if they are working within office hours.
- A contractor can read specific documents only if their contract is active.
- A user can download a report only when connected through a secure corporate network.

### Why ABAC is Important:

1. Provides Dynamic, Granular Access Control
   1. ABAC allows organizations to evaluate real-time conditions.
   2. Instead of relying on rigid roles, it uses attributes like:
      1. Department
      2. Clearance level
      3. Device type
      4. Time
      5. Location

   It reduces excessive privileges and adapts access based on context.

2. Better Scalability and Flexibility
   1. No need to create hundreds of roles.
   2. Adding a new user or scenario doesn’t require restructuring roles just update attributes or policies.
   3. Perfect for companies with large, diverse team or complex workflows.
3. Supports Compliance with Complex Regulations
   1. Compliance frameworks often require conditional access. ABAC helps track:
      1. Why an access decision was made
      2. Which attributes were evaluated
      3. Whether the conditions met the security standards

   This boots auditability, transparency and control.

### How ABAC Works

- ABAC evaluates decision-making based on four core sets of attributes:
  - User Attributes(e.g. department, security clearance, job title, employment status)
  - Resource Attributes(e.g. document sensitivity, file type, data classification)
  - Action Attributes(e.g. read, write, edit, delete)
  - Environment Attributes (e.g. time, location, device security, network trust level)
- Access decisions follow a standard structure:
  Subject Attributes + Resource Attributes + Action + Environment → Policy → Allowed / Denied
- Policies define rules such as:
  - “Allow access if user.department = ‘HR’ AND resource.classification = ‘Internal’ AND request.time within 9AM-5AM.”
- This results in highly customizable and conditional access rules.

### Core Principle of ABAC

- Attribute Evaluation: Access is determined by the attributes, not a preset role. If attributes don’t match policy, access is denied.
- Policy-Based Decision: Every access request is evaluated through policies defined using logical conditions.
- Context Awareness: Decisions can change dynamically depending on real-time factors, like device trust or location.
- Least Privilege by Design: Users receive only the access they are authorized for at that specific moment based on evaluated attributes.

### Vulnerabilities:

**Attribute Manipulation:**

- Occurs when an attacker modifies user attributes (e.g. department, clearance, employment status) to gain unauthorized access due to weak or missing server-side validation.
- Impact: Leads to unauthorized privilege escalation, access to sensitive data or bypassing restrictions based on user identity or department.
- Example: A user edits a JWT and changes `"clearance": "low"` to `"clearance": "high"` and the system accepts it.
- Testing Approach: Intercept tokens or requests, modify attributes and resend. Check whether the server revalidates attributes or trusts client-side values.

**Policy Misconfiguration:**

- Policies may contain incomplete, overly broad, or incorrect conditions, causing the system to allow or deny access unintentionally.
- Impact: Can expose sensitive resources or break legitimate workflows depending on how the policy is misconfigured.
- Example: A policy allows all authenticated users to read document classified as “Internal” because the sensitive attributes was not checked.
- Testing Approach: Test access across various combinations of attributes. Attempt accessing restricted resources using minimal or mismatched attributes to detect overly permissive rules.

**Environment Attribute Spoofing:**

- Attackers manipulate environment factors like time, IP address, or device information to bypass environment-based access controls.
- Impact: Allows bypassing geo-based restrictions, time-based access, or device-trust requirements.
- Example: Changing device time zone to access data after business hours, or spoofing IP headers to appear inside the corporate network.
- Testing Approach: Alter time zone, IP address, headers like `X-Forwarded-For`, and device parameters to verify strong server-side checks.

**Inconsistent or Stale Attributes Values:**

- Attributes sourced from multiple systems may not update consistently, leading to outdated or incorrect access states.
- Users may retain access after role/department changes or after employment termination.
- Example: A fire employee’s “employment_status” attribute remains active, allowing continued access to internal systems.
- Testing Approach: Change user attributes(department, clearance, status) and immediately test access to confirm real-time updates and sync between systems.

**Policy Conflict or Overlap:**

- Multiple ABAC policies may contradict each other, creating unexpected authorization behavior.
- Impact: May allow unauthorized access or block legitimate operations due to conflicting logic.
- Example: One policy allows emergency data access, while another denies access from external network causing inconsistent decisions.
- Testing Approach: Create scenarios where multiple policies should apply. Observe whether decisions match expected outcomes or reveal logical contradictions.

**Privilege Escalation via attribute Injection:**

- Attackers insert unauthorized attributes into API request or tokens to elevate privileges.
- Impact: Direct administrative or high-privilege access gained without proper authorization.
- Example: Attacker adds `"isAdmin": true` or `"group": "finance_manager"` to a JSON request body, and the system blindly accepts it.
- Testing Approach: Modify request bodies by injecting new attributes. Test whether the server ignores or validates unrecognized or unauthorized fields.

**IDOR through weak attribute checks:**

- The system relies only on resource IDs or predictable identifiers without verifying the user’s related attributes.
- Impact: Users can access or modify other’s files or personal data by changing IDs.
- Example: Changing `/document/122` to `/document/123` allows access because the system only checks the ID and not attributes like owner or sensitivity.
- Testing Approach: Perform parameter tampering on resource identifiers. Verify that the system cross-checks user attributes such as ownerId, department or confidentiality level.
