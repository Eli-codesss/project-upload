/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Wa7gOezkUtg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Project Guidelines
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Welcome to our student project upload platform! Here you can share
            your amazing work with the world. Before you get started, please
            review the following guidelines to ensure a smooth submission
            process.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Submission Requirements
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-medium text-foreground">
                File Formats
              </h3>
              <p className="mt-2 text-muted-foreground">
                We accept the following file formats: PDF, JPG, PNG, MP4, and
                ZIP. Please ensure your files are in one of these formats before
                uploading.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground">
                File Size Limit
              </h3>
              <p className="mt-2 text-muted-foreground">
                The maximum file size for each project is 100MB. If your project
                is larger, please compress or split it into multiple files.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground">
                Project Description
              </h3>
              <p className="mt-2 text-muted-foreground">
                Please provide a brief description of your project, including
                its purpose, key features, and any relevant context. This will
                help us better understand and showcase your work.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            How to Upload Your Project
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-medium text-foreground">Step 1</h3>
              <p className="mt-2 text-muted-foreground">
                Gather all the necessary files for your project, ensuring they
                are in the correct format and within the size limit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground">Step 2</h3>
              <p className="mt-2 text-muted-foreground">
                Go to the project upload page and click the &quot;Upload
                Project&quot; button.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground">Step 3</h3>
              <p className="mt-2 text-muted-foreground">
                Follow the on-screen instructions to select your project files,
                provide a description, and submit your project for review.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions or need assistance with the submission
            process, please don&#39;t hesitate to reach out to us. You can
            contact our support team at{" "}
            <a href="#" className="text-primary underline">
              support@projectupload.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
