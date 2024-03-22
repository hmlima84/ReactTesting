import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from './Carousel'; // Import your Carousel component
import TEST_IMAGES from "./_testCommon.js"; // Import test images or create a sample array

/* Define test images
const TEST_IMAGES = [
  { src: "test1.com", caption: "testing image 1" },
  { src: "test2.com", caption: "testing image 2" }
];
*/

//smoke test
it('renders without crashing', () => {
  const photos = [{ src: 'image-src-1', caption: 'Image 1' }, { src: 'image-src-2', caption: 'Image 2' }];
  render(<Carousel photos={photos} title="Test Title" />);
});

//snapshot test
it('matched card', () => {
  const photos = [{ src: 'image-src-1', caption: 'Image 1' }, { src: 'image-src-2', caption: 'Image 2' }];
  const {asFragment} = render(<Carousel photos={photos} title="Test Title" />);
  expect(asFragment()).toMatchSnapshot()
})

// Test case
it("works when you click on the right arrow", () => {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} title="images for testing" />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument(); 
}); 
