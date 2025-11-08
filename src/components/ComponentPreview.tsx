import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  code: string;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Component preview error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full bg-background">
          <div className="text-center space-y-4 p-8">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Preview Error</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                {this.state.error?.message || 'Failed to render component preview'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

interface ComponentPreviewProps {
  code: string;
}

export const ComponentPreview = ({ code }: ComponentPreviewProps) => {
  return (
    <ErrorBoundary code={code}>
      <div className="h-full overflow-auto bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-center space-y-4">
              <div className="text-muted-foreground">
                <p className="text-sm">Component Preview</p>
                <p className="text-xs mt-2">
                  Interactive preview coming soon. For now, copy the code and use it in your project.
                </p>
              </div>
              <div className="pt-4">
                <pre className="text-left text-xs bg-muted p-4 rounded overflow-auto max-h-96">
                  <code>{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
