import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../button';
import Avatar from '../avatar';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[#ff5e3a]');
  });

  it('applies secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-[#888da8]');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

describe('Avatar', () => {
  it('renders fallback when no src provided', () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders OptimizedImage when src is provided', () => {
    render(<Avatar src="/test-image.jpg" alt="Test User" />);
    const img = screen.getByAltText('Test User');
    expect(img).toBeInTheDocument();
  });

  it('applies correct size', () => {
    render(<Avatar alt="Test" size={60} />);
    const container = screen.getByTitle('');
    expect(container).toHaveStyle({ width: '60px', height: '60px' });
  });
});