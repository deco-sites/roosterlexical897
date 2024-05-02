import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /** 
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  textoDescritivo?: string;
  logo?: ImageWidget;
}


export default function HeroFlats({
  textoDescritivo,
  logo,
}: Props) {
  return (
    <div class="flex h-screen">
      {/* Left column */}
      <div class="flex w-1/2">
        
        {/* First sub-column */}
        <div class="flex flex-col w-1/12">
          <div class="h-10 bg-gray-200">
            <Image
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8677/83072e06-26a9-482d-aed4-cff656e7bc21"
                alt="Image"
                width = {50}
              />
          </div>
        </div>
        
        {/* Second sub-column */}
        <div class="flex flex-col overflow-auto p-10">
          
          {/* First division */}
          <div class="flex flex-col pb-15">
            <Image 
              src={logo}
              alt="Your image" 
              width = {500}
              />
          </div>
          
          {/* Second division */}
          <div class="flex flex-col h-1/3 overflow-auto mb-4 overflow-y-auto max-h-60 p-2 w-[30vw] h-[70vw]">
              <p>{textoDescritivo}</p>
          </div>
          
          {/* Third division (empty) */}
          <div class="flex flex-col items-center justify-center">
            <p>post</p>
          </div>
        </div>
      </div>
      
      {/* Right column */}
      <div class="h-full w-1/2 overflow-auto">
        {/* Scrollable list content goes here */}
        <div class="flex overflow-x-scroll h-full">
          <div class="flex-none w-64 h-full bg-gray-700 mr-1 relative">
          <div class="absolute inset-x-0 bottom-0 bg-blue-700 h-96 flex justify-center items-center">
            <p class="transform -rotate-90 text-center">
              <span class="font-bold">2024</span> <span>V.14 n.01</span>
            </p>
          </div>
        </div>
        <div class="flex-none w-64 h-full bg-gray-700 mr-1 relative">
          <div class="absolute inset-x-0 bottom-0 bg-blue-700 h-96 flex justify-center items-center">
            <p class="transform -rotate-90 text-center">
              <span class="font-bold">2024</span> <span>V.14 n.01</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
