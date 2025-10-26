import Navbar from '@/components/Navbar';

const Workspace = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Your Workspace
          </h1>
          <p className="text-muted-foreground text-lg">
            You've successfully signed in to WeeWeb. This is where you'll build amazing projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Workspace;
