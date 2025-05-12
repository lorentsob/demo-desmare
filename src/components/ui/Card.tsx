import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "secondary";
}

export function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const baseClasses = "card";

  const variantClasses = {
    default: "",
    accent: "bg-accent-50 border-accent-100",
    secondary: "bg-section-bg-light",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`text-text-secondary mt-1 ${className}`}>{children}</p>;
}

export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-4 flex items-center ${className}`}>{children}</div>
  );
}
