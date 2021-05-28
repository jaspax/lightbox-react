import * as React from "react";

type SourceType = string | Function | React.ReactNode | React.ElementType;

export interface ILightBoxProps {
  mainSrc: SourceType;
  nextSrc?: SourceType;
  prevSrc?: SourceType;
  mainSrcThumbnail?: string;
  prevSrcThumbnail?: string;
  nextSrcThumbnail?: string;
  onCloseRequest(): void;
  onMovePrevRequest?(): void;
  onMoveNextRequest?(): void;
  onImageLoad?(): void;
  onImageLoadError?(): void;
  imageLoadErrorMessage?: React.ReactNode;
  onAfterOpen?(): void;
  discourageDownloads?: boolean;
  animationDisabled?: boolean;
  animationOnKeyInput?: boolean;
  animationDuration?: number;
  keyRepeatLimit?: number;
  keyRepeatKeyupBonus?: number;
  imageTitle?: string;
  imageCaption?: string;
  imageCrossOrigin?: string;
  toolbarButtons?: React.ReactNode[];
  reactModalStyle?: any;
  reactModalProps?: any;
  imagePadding?: number;
  clickOutsideToClose?: boolean;
  enableZoom?: boolean;
  wrapperClassName?: string;
  nextLabel?: string;
  prevLabel?: string;
  zoomInLabel?: string;
  zoomOutLabel?: string;
  closeLabel?: string;
}

export default class Lightbox extends React.Component<ILightBoxProps, never> {}
