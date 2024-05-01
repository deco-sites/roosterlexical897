import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /** 
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "This text is entirely editable, tailor it freely.",
  image,
  placement = "left",
  cta,
}: Props) {
  return (
    <div className="flex h-screen">
      {/* Left column */}
      <div className="flex w-1/2">
        
        {/* First sub-column */}
        <div className="flex flex-col w-1/12">
          <div className="h-10 bg-gray-200">
            <Image
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8677/83072e06-26a9-482d-aed4-cff656e7bc21"
                alt="Image"
                width = {50}
              />
          </div>
        </div>
        
        {/* Second sub-column */}
        <div className="flex flex-col overflow-auto p-8">
          
          {/* First division */}
          <div className="flex flex-col">
            <Image 
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04" 
              alt="Your image" 
              width = {200}
              />
          </div>
          
          {/* Second division */}
          <div className="flex flex-col h-1/3 overflow-auto mb-4 overflow-y-auto max-h-40 p-2 w-[30vw] h-[70vw]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet 
              et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
              posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
              Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet 
              et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
              posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            </p>
          </div>
          
          {/* Third division (empty) */}
          <div className="flex flex-col items-center justify-center"></div>
        </div>
      </div>
      
      {/* Right column */}
      <div className="h-full w-1/2 overflow-auto">
        {/* Scrollable list content goes here */}
        <ul className="overflow-y-auto max-h-80 border border-gray-300 rounded p-4 scrollable-list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </div>
  );
}
