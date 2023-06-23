import { useState, useRef, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Html5QrcodeScannerState } from "html5-qrcode";
import type { UseScannerProps } from "./types";

export const useQrCodeScanner = (props: UseScannerProps) => {
  const {
    verbose,
    fps,
    qrbox,
    onQrCodeScanSuccess,
    onQrCodeScanError,
    scannerContainerRef,
  } = props;

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const scannerRef = useRef<Html5Qrcode | null>(null);

  const handleScannerError = (err: unknown) => {
    console.error(err);
    if (typeof err === "string") {
      setError(err);
    } else {
      setError("Unknown error, please try again.");
    }
  };

  const initializeScanner = async (scanner: Html5Qrcode) => {
    const state = scanner.getState();
    if (
      state === Html5QrcodeScannerState.NOT_STARTED ||
      state === Html5QrcodeScannerState.PAUSED ||
      state === Html5QrcodeScannerState.UNKNOWN
    ) {
      const config = { fps, qrbox };
      await scanner.start(
        { facingMode: "environment" },
        config,
        onQrCodeScanSuccess,
        onQrCodeScanError
      );
      setLoading(false);
      setError(null);
    }
  };

  const stopScanner = async (scanner: Html5Qrcode) => {
    const state = scanner.getState();
    if (
      state !== Html5QrcodeScannerState.NOT_STARTED &&
      state !== Html5QrcodeScannerState.UNKNOWN
    ) {
      await scanner.stop();
    }
    setLoading(true);
  };

  useEffect(() => {
    if (!scannerRef.current && scannerContainerRef.current) {
      scannerRef.current = new Html5Qrcode(
        scannerContainerRef.current.id,
        verbose
      );
      initializeScanner(scannerRef.current).catch((err) =>
        handleScannerError(err)
      );
    }

    return () => {
      if (scannerRef.current) {
        stopScanner(scannerRef.current).catch((err) => handleScannerError(err));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, error };
};
