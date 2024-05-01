import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** 
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  textoDescritivo: string;
  logo?: ImageWidget;
}


export default function HeroFlats({
  textoDescritivo,
  logo,
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
          <div className="flex flex-col pb-15">
            <Image 
              src={logo}
              alt="Your image" 
              width = {500}
              />
          </div>
          
          {/* Second division */}
          <div className="flex flex-col h-1/3 overflow-auto mb-4 overflow-y-auto max-h-60 p-2 w-[30vw] h-[70vw]">
              <p>{textoDescritivo}</p>
          </div>
          
          {/* Third division (empty) */}
          <div className="flex flex-col items-center justify-center">
            <p>post</p>
          </div>
        </div>
      </div>
      
      {/* Right column */}
      <div className="h-full w-1/2 overflow-auto">
        {/* Scrollable list content goes here */}
        <div class="flex overflow-x-scroll">
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 1</div>
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 2</div>
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 3</div>
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 4</div>
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 1</div>
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 2</div>
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 3</div>
          <div class="flex-none w-48 h-24 bg-gray-700 mr-1">Item 4</div>
        </div>
      </div>
    </div>
  );
}
