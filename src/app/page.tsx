import { Github, Download, Linkedin, Mail, ExternalLink, BookOpen } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <img
            src="/professional-cloud-engineer-portrait.jpg"
            alt="Dehan Bekker"
            className="h-48 w-48 rounded-full object-cover border-4 border-blue-500/20 animate-scale-in"
          />
          <div className="space-y-4 animate-fade-in delay-200">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Dehan Bekker</h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light">Cloud Engineering Professional</p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mx-auto">
              Empowering clients through effective adoption of cloud and AI technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-400">
            <a
              href="https://github.com/iac23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="/Dehan_Bekker_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-700 rounded-lg font-medium transition-colors"
            >
              <Download className="h-5 w-5" />
              View Resume
            </a>
            <a
              href="https://linkedin.com/in/dehan-bekker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-gray-800 text-white border border-gray-700 rounded-lg font-medium transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="space-y-6 animate-slide-in-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
            Experienced Cloud Engineer with a proven track record in AWS infrastructure, IaC, and customer-focused
            solutions. I specialize in migrating manual deployments to automated, scalable Infrastructure as Code while
            designing secure, role-based access frameworks.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="flex flex-col bg-gray-900 border border-gray-800 rounded-lg overflow-hidden animate-scale-in delay-100">
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Serverless Video Platform</h3>
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    Built a customer-focused serverless application using Lambda, S3, API Gateway, and MediaConvert
                    enabling users to upload, process, and access videos with quick onboarding for non-technical users
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">AWS Lambda</span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">S3</span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">API Gateway</span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">
                      MediaConvert
                    </span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">IAM</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-transparent hover:bg-gray-800 border border-gray-700 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Repository
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col bg-gray-900 border border-gray-800 rounded-lg overflow-hidden animate-scale-in delay-200">
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">CI/CD Deployment Pipeline</h3>
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    Automated deployment workflows for web applications using GitHub Actions and S3, reducing manual
                    errors and decreasing rollout time from 20 minutes to under 30 seconds
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">
                      GitHub Actions
                    </span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">S3</span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">CI/CD</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-transparent hover:bg-gray-800 border border-gray-700 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Repository
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col bg-gray-900 border border-gray-800 rounded-lg overflow-hidden animate-scale-in delay-300">
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">FileVault: Cloud Storage Platform</h3>
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    Designed a secure, encrypted S3-based storage platform with least-privilege IAM access for small
                    businesses, complete with comprehensive documentation for onboarding and troubleshooting
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">AWS S3</span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">IAM</span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">Encryption</span>
                    <span className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md">
                      Documentation
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-transparent hover:bg-gray-800 border border-gray-700 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container mx-auto px-4 py-20 max-w-5xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-4 animate-slide-in-right delay-200">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>AWS Certified Solutions Architect – Associate</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>AWS Certified Cloud Practitioner</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>AWS Certified AI Practitioner</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Cloud Engineering Academy Certificate</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>Currently pursuing: AWS Certified Security – Specialty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 pb-32 max-w-5xl">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">Contact</h2>

          <div className="space-y-4 animate-slide-in-left delay-200">
            <a
              href="mailto:dehanbekker@gmail.com"
              className="flex items-center gap-3 text-lg text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              dehanbekker@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/dehan-bekker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              linkedin.com/in/dehan-bekker
            </a>
            <a
              href="https://github.com/iac23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-gray-400 hover:text-gray-100 transition-colors"
            >
              <Github className="h-5 w-5" />
              github.com/iac23
            </a>
            <a
              href="https://medium.com/@dehanbekker23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-gray-400 hover:text-gray-100 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              medium.com/@dehanbekker23
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
