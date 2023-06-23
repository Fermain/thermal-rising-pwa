import React, { useRef, useState } from "react";
import { useQrCodeScanner } from "./useQrCodeScanner";
import { LoadingContainer } from "../ui/loadingSpinner";
import DebugInfo from "./qrCodeScannerDebugInfo";

import type { QrCodeProps } from "./types";
import type { Html5QrcodeResult } from "html5-qrcode";

const QrCodeScanner: React.FC<QrCodeProps> = (props) => {
  const scannerContainerRef = useRef<HTMLDivElement | null>(null);
  const [scanResult, setScanResult] = useState<{
    decodedText?: string;
    decodedResult?: Html5QrcodeResult;
  }>({});

  const onQrCodeScanSuccess = (
    decodedText: string,
    decodedResult: Html5QrcodeResult
  ) => {
    props.onQrCodeScanSuccess(decodedText, decodedResult);
    setScanResult({ decodedText, decodedResult });
  };

  const { isLoading, error } = useQrCodeScanner({
    ...props,
    scannerContainerRef,
    onQrCodeScanSuccess,
  });

  return (
    <>
      <div className="h-96 w-96 bg-white/50 text-black">
        {isLoading && <LoadingContainer size={64} />}
        {error && <div>{error}</div>}

        <div ref={scannerContainerRef} id="qr-scanner-wrapper" />
      </div>
      {props.debug && (
        <DebugInfo
          isLoading={isLoading}
          error={error}
          props={props}
          scanResult={scanResult}
        />
      )}
    </>
  );
};

export default QrCodeScanner;
