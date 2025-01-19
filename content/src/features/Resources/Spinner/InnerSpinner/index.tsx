import React from 'react';

export default function InnerSpinner({
  loadingText = 'Loading..',
  small = false,
}: {
  loadingText?: string;
  small?: boolean;
}) {
  return (
    <div className="grid place-items-center bg-transparent p-4 rounded-lg">
		<p className={`${small && "text-xs"}`}>{loadingText}</p>

		<div
			className={`animate-spin bg-transparent border-[0.5dvw] border-solid border-t-transparent border-b-transparent border-l-[#3b3a3a] border-r-[#3b3a3a] rounded-full z-0 ${small ? 'w-[5dvh] h-[5dvh]' : ''}`}
			style={small ? { width: "1.2rem", height: "1.2rem", borderWidth: "0.2rem" } : {}}
		/>
    </div>
  );
}
