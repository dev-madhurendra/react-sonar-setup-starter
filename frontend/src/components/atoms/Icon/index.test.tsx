import { render, screen } from "@testing-library/react";
import MuiIcon from ".";

describe("Icon component", () => {
  it("renders an image with correct props", () => {
    const src = "path/to/image.png";
    const altText = "Icon";
    const width = "24px";
    const height = "24px";

    render(<MuiIcon src={src} alt={altText} width={width} height={height} />);

    const imageElement = screen.getByRole("img");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", src);
    expect(imageElement).toHaveAttribute("alt", altText);
    expect(imageElement).toHaveAttribute("width", width);
    expect(imageElement).toHaveAttribute("height", height);
  });
});