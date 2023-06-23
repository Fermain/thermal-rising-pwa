import type { Html5QrcodeResult } from "html5-qrcode";
import React from "react";
import type { QrCodeProps } from "./types";

interface DebugInfoProps {
  isLoading: boolean;
  error: string | null;
  props: QrCodeProps;
  scanResult: { decodedText?: string; decodedResult?: Html5QrcodeResult };
}

const DebugInfo: React.FC<DebugInfoProps> = ({
  isLoading,
  error,
  props,
  scanResult,
}) => {
  return (
    <div className="absolute left-0 top-0 bg-white/50 p-4 text-black">
      <div>isLoading: {isLoading.toString()}</div>
      <div>error: {error?.toString() ?? "none"}</div>
      <pre>props: {JSON.stringify(props, null, 2)}</pre>
      <div>
        <pre>scan: {JSON.stringify(scanResult, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DebugInfo;
