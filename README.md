# AWS Amplify Portfolio

A modern, cloud-native portfolio website built with Next.js and deployed on AWS infrastructure, demonstrating enterprise-grade CI/CD practices and comprehensive security implementation.

## Business Problem

Traditional portfolio hosting solutions lack:
- Automated deployment workflows that enable rapid iteration
- Enterprise-level security controls and compliance features
- Scalability and global content delivery
- Infrastructure as Code (IaC) for version control and reproducibility

This project addresses these gaps by building a production-ready portfolio using AWS services with automated CI/CD pipelines and defense-in-depth security.

## Architecture Overview

```
Developer → GitHub → AWS Amplify → CloudFront CDN → Users
                         ↓
                    Route 53 (DNS + DNSSEC)
                         ↓
                    KMS (Cryptographic Signing)
```

## Key Features

- **Automated CI/CD Pipeline**: Git-push triggers automatic build and deployment (1-2 minute update cycle)
- **Global Content Delivery**: CloudFront CDN ensures low-latency access worldwide
- **Enterprise Security**: Multi-layered security with HTTPS/SSL, DNSSEC, security headers, and KMS encryption
- **Infrastructure as Code**: Complete infrastructure defined in AWS CDK with TypeScript
- **Custom Domain**: Professional domain management through Route 53

## Technology Stack

**Frontend**
- Next.js (React framework)
- Responsive design

**Infrastructure & DevOps**
- AWS Amplify (hosting & CI/CD)
- AWS CDK with TypeScript (IaC)
- GitHub (version control & deployment trigger)
- AWS CloudFormation (infrastructure provisioning)

**Security & Networking**
- Route 53 (DNS management)
- AWS Certificate Manager (SSL/TLS certificates)
- AWS KMS (cryptographic key management)
- CloudFront (CDN with security headers)
- DNSSEC (DNS security extensions)

**Development Tools**
- Vercel v0 (AI-assisted frontend generation)
- AWS CLI
- AWS Secrets Manager (secure token storage)

## Security Implementation

### Network Level
- **DNSSEC**: Cryptographic signing of DNS records using KMS to prevent DNS spoofing
- **SSL/TLS**: Automatic HTTPS encryption via AWS Certificate Manager
- **Security Headers**: CloudFront-configured headers for XSS and injection protection

### Application Level
- **KMS Integration**: Hardware Security Module (HSM) backed key management with FIPS 140-2 Level 3 validation
- **CloudTrail Logging**: Complete audit trail of all key usage
- **Automatic Key Rotation**: AWS-managed key lifecycle

### Access Control
- **Secrets Manager**: Secure storage of GitHub Personal Access Tokens
- **Amplify Access Control**: Password protection and IP allowlisting capabilities

## Project Structure

```
portfolio/
├── portfolio-infrastructure/    # CDK infrastructure code
│   ├── bin/                    # CDK app entry point
│   ├── lib/                    # Stack definitions
│   └── cdk.json                # CDK configuration
└── [Next.js application files]
```

## Deployment Process

1. **Local Development**: Build and test Next.js application
2. **Git Push**: Commit changes to GitHub main branch
3. **Automatic Trigger**: Amplify detects repository changes
4. **Build Phase**: Amplify executes build specifications
5. **Deploy Phase**: Application deployed to CloudFront CDN
6. **Verification**: Site live with updated content (1-2 minutes)

## CI/CD Pipeline

The automated workflow handles:
- Code fetching from GitHub repository
- Dependency installation and build execution
- Asset optimization and deployment
- DNS propagation and SSL certificate management
- CloudFront cache invalidation

## Infrastructure as Code Benefits

- **Version Control**: Complete infrastructure history in Git
- **Reproducibility**: Spin up identical environments instantly
- **Collaboration**: Team members can review infrastructure changes
- **Disaster Recovery**: Rapid environment reconstruction from code
- **Consistency**: Eliminates configuration drift

## Validation & Monitoring

**Security Verification**
- SSL Labs online reports for TLS configuration
- DNSSEC validation via online tools and CLI (`dig`, `curl`)
- Security header verification through browser DevTools

**Performance Monitoring**
- CloudFront edge location distribution (AnyCast routing with multiple IPs)
- TTL optimization for DNS records
- CDN cache hit ratios

## Key Learnings

- Monorepo build configuration for Amplify deployments
- KMS-backed DNSSEC implementation for DNS security
- Alpha construct usage in CDK for higher-level abstractions
- DS (Delegation Signer) record configuration for trust chains
- CloudFormation template debugging and stack management

## Cost Optimization

- **Domain Registration**: ~$15/year (Route 53)
- **Amplify Hosting**: Pay-per-use pricing
- **Optional WAF**: $15/month (for advanced DDoS and bot protection)
- **Free Tier**: SSL certificates, CloudFront, and basic security features included

## Let's Connect:

- **LinkedIn**: [in/dehan-bekker](https://linkedin.com/in/dehan-bekker)
- **GitHub**: [github.com/iac23](https://github.com/iac23)
