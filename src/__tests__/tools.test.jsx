// Tools.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Tools from "../components/Tools";
import toolsPhoto from "../assets/tools/img/tools-image.png";

describe("Tools Component", () => {
  beforeEach(() => {
    render(<Tools />);
  });

  it("should render the header and subheader", () => {
    expect(screen.getByText("tools.")).toBeInTheDocument();
    expect(screen.getByText("my go-to toolkit for crafting.")).toBeInTheDocument();
  });

  it("should render the main image", () => {
    const img = screen.getByAltText("photo with a laptop");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(toolsPhoto);
  });

  it("should render all tool logos", () => {
    expect(screen.getByAltText("figma logo")).toBeInTheDocument();
    expect(screen.getByAltText("github logo")).toBeInTheDocument();
    expect(screen.getByAltText("visualstudio code logo")).toBeInTheDocument();
    expect(screen.getByAltText("postman logo")).toBeInTheDocument();
    expect(screen.getByAltText("mongodb logo")).toBeInTheDocument();
    expect(screen.getByAltText("netlify logo")).toBeInTheDocument();
    expect(screen.getByAltText("notion logo")).toBeInTheDocument();
    expect(screen.getByAltText("squarespace logo")).toBeInTheDocument();
  });

  it("should render the correct links", () => {
    const links = [
      { href: "https://figma.com", text: "figma" },
      { href: "https://code.visualstudio.com/", text: "vscode" },
      { href: "https://www.notion.so/", text: "notion" },
      { href: "https://github.com/", text: "github" },
      { href: "https://www.postman.com/", text: "postman" },
      { href: "https://www.mongodb.com/products/tools/compass", text: "mongodb compass" },
      { href: "https://www.mongodb.com/products/platform/atlas-database", text: "mongodb atlas" },
      { href: "https://www.netlify.app/", text: "netlify" },
      { href: "https://www.squarespace.com/", text: "squarespace" }
    ];

    links.forEach(link => {
      const anchorElement = screen.getByText(link.text).closest('a');
      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement).toHaveAttribute('href', link.href);
      expect(anchorElement).toHaveAttribute('target', '_blank');
    });
  });
});
