import type { RefObject } from "react";
import type {
  QrcodeErrorCallback,
  QrcodeSuccessCallback,
  Html5QrcodeCameraScanConfig,
} from "html5-qrcode";

/**
 *
 * @property {boolean} [verbose] - Enables detailed logging in the console when true.
 * @property {QrcodeSuccessCallback} onQrCodeScanSuccess - Callback function that is invoked when a QR code is successfully scanned.
 * @property {QrcodeErrorCallback} [onQrCodeScanError] - Callback function that is invoked when there is an error while scanning a QR code.
 * @property {Html5QrcodeCameraScanConfig} [Html5QrcodeCameraScanConfig] - Object that provides additional configuration for the HTML5 QrCode scanner.
 */

export interface QrCodeProps extends Html5QrcodeCameraScanConfig {
  verbose?: boolean;
  onQrCodeScanSuccess: QrcodeSuccessCallback;
  onQrCodeScanError?: QrcodeErrorCallback;
  debug?: boolean;
}

/**
 *
 * @property {string} scannerContainerId - The ID of the HTML element that will contain the QR code scanner.
 */

export interface UseScannerProps extends QrCodeProps {
  scannerContainerRef: RefObject<HTMLDivElement>;
}
