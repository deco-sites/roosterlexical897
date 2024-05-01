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
  textoDescritivo: string;
  logo?: ImageWidget;
  cta?: CTA[];
}


export default function HeroFlats({
  textoDescritivo,
  logo,
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
        <div className="flex flex-col overflow-auto p-10">
          
          {/* First division */}
          <div className="flex flex-col pb-20">
            <Image 
              src={logo}
              alt="Your image" 
              width = {200}
              />
          </div>
          
          {/* Second division */}
          <div className="flex flex-col h-1/3 overflow-auto mb-4 overflow-y-auto max-h-40 p-2 w-[30vw] h-[70vw]">
              <p>Teste{textoDescritivo}</p>
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
