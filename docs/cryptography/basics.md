# Cryptography

- Cryptography is the way of securing information with the use of codes so that only those persons for whom the information is meant to understand can understand it.
- It prevents unauthorized access to the sensitive data
- Word origin:
  - “Crypt”: Hidden
  - “Graphy”: Writing
- It relies on mathematical concepts and rules that are based on algorithms to transform messages into unreadable formats.
- **Features of Cryptography:**
  - **Confidentiality:** Information can only be accessed by the intended person.
  - **Integrity:** Information cannot be modified in the stage of storage or transition between the sender and receiver.
  - **Non-repudiation:** The Sender cannot deny the sent information.
  - **Authentication:** The identities of both the sender and receiver are verified, along with confirmation of the source and destination of the information.
  - **Interoperability:** It allows for secure communication between different systems and platforms.
  - **Adaptability:** It continuously evolves to stay ahead of security threats and technological advancements.

## Types of Cryptography:

- Symmetric Key Cryptography:
  - Sender and receiver of a message use a single common key to encrypt and decrypt messages.
  - Fast and simple
  - Sender and Receiver have to exchange key securely.
  - Popular symmetric key cryptography systems: Data Encryption System(DES) and Advanced Encryption System(AES).
- Hash functions:
  - No usage of any key in this algorithm.
  - A hash value with a fixed length is calculated as per the plain text.
  - It makes impossible for the contents of plain text to be recovered.
  - Many operating systems use hash functions to encrypt password.
- Asymmetric Key Cryptography:
  - A pair of keys is used to encrypt and decrypt information.
  - Sender’s public key is used for encryption and a receiver’s private key is used for decryption.
  - Public key and Private keys are different.
  - Even if the public key is known by everyone the intended receiver can only decode it.
  - The most popular asymmetric key cryptography algorithm is the RSA algorithm.

<div style="background:#1e2633; border-radius:8px; padding:18px; margin:20px 0; border-left:5px solid #4da3ff; text-align:center;">

<strong>Hash functions</strong>
<br> <br>
<img src="/assets/images/networking/hash-fuction.png"  alt="Hash functions - TCP Handbook" style="max-width:100%; border-radius:6px;">

</div>

## Applications of Cryptography

- Computer passwords:
  - Used in computer security when creating and maintaining passwords.
  - When the user logs in their password is hashed and compared to the hash that was previously stored.
  - Password are hashed and encrypted so that even if a hacker gain access to the password database they can not read the passwords.
- Digital Currencies:
  - To protect transactions and prevent frauds, digital currencies like Bitcoin also use cryptography.
  - Complex algorithm and cryptographic key are used.
  - It makes harder to tamper with or forge the transactions.
- Secure web browsing:
  - Public key cryptography is used by the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols to encrypt data sent between the web server and the client.
- Electronic Signatures:
  - They are created using cryptography and can be validated using public key cryptography.
  - Electronic signatures are enforceable by law and their use is expanding quickly.
- Authentication:
  - Used in situations like accessing a bank account, logging into a computer or using a secure network.
  - They are employed by authentication protocols to confirm the user’s identity and confirm that they have the required access rights to the resources.
- Cryptocurrencies:
  - Heavily used by cryptocurrencies like Bitcoin and Ethereum to protect transactions, thwart fraud, and maintain network’s integrity.
  - Complex algorithms and cryptographic keys are used to protect transactions, making it harder to tamper with or forge the transactions.
- End-to-end Internet Encryption:
  - Used to protect two-way communications like video conversations, messages and email.
  - Widely used in communication apps like WhatsApp and Signal and it provides a high level of security and privacy for users.

## Types of Cryptography Algorithm:
  - Advanced Encryption Standards (AES):
    - Uses the same key for encryption and decryption.
    - Symmetric block cipher algorithm with block size of 128 bits, 192 bits or 256 bits.
    - AES algorithm is widely regarded as the replacement of DES (Data encryption standard) algorithm.
  - RSA:
    - Basic asymmetric cryptographic algorithm which uses two different keys for encryption.
    - RSA algorithm works on a block cipher concept that converts plain text into cipher text and vice versa.
  - Secure Hash Algorithm (SHA):
    - Used to generate unique fixed-length digital fingerprints of input data known as hashes.
    - **SHA-2** and **SHA-3** are commonly used.

<div style="background: #1f3327; border-radius: 8px; padding: 18px; margin: 20px 0; border-left: 5px solid #3ddc84; color: #e6e6e6;">
<strong>✔ Learning Tip</strong><br><br>
Experiment with different security tools to understand their strengths and limitations.
</div>