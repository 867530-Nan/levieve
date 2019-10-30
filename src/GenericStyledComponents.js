import LVStyleGuide from './LVStyleGuide.js'
import styled, { css } from 'styled-components'

const defaultFont = LVStyleGuide.font.family.chivo
const headerFont = LVStyleGuide.font.family.monoFur

const mediaQueryLargeMaxWidth = '992px'
const mediaQueryMediumMaxWidth = '768px'
const mediaQuerySmallMaxWidth = '400px'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 400
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

// export const TWPDiv = styled.div.attrs({
//   display: props => props.display || 'flex',
//   position: props => props.position || null,
//   padding: props => props.padding || '0 2%',
//   margin: props => props.margin || '0px',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flexWrap: props => props.flexWrap || null,
//   flex: props => props.flex || 'wrap',
//   width: props => props.width || null,
//   order: props => props.order || null,
//   backgroundColor: props => props.backgroundColor || null,
//   background: props => props.background || null,
//   backgroundImage: props => props.desktopImage || null,
//   backgroundRepeat: props => props.backgroundRepeat || 'no-repeat',
//   backgroundPosition: props => props.backgroundPosition || 'center center',
//   backgroundAttachment: props => props.backgroundAttachment || null,
//   backgroundSize: props => props.backgroundSize || null,
//   border: props => props.border || null,
//   borderLeft: props => props.borderLeft || null,
//   borderRight: props => props.borderRight || null,
//   borderBottom: props => props.borderBottom || null,
//   borderTop: props => props.borderTop || null,
//   borderRadius: props => props.borderRadius || null,
//   cursor: props => props.cursor || null
// })`
//   display: ${props => props.display};
//   position: ${props => props.position};
//   padding: ${props => props.padding};
//   margin: ${props => props.margin};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex-wrap: ${props => props.flexWrap};
//   flex: ${props => props.flex};
//   align-items: ${props => props.alignItems};
//   height: ${props => (props.height ? props.height : 'auto')};
//   width: ${props => props.width};
//   background-color: ${props => props.backgroundColor};
//   background: ${props => props.background};
//   background-image: ${props => props.desktopImage};
//   background-repeat: ${props => props.backgroundRepeat};
//   background-position: ${props => props.backgroundPosition};
//   background-attachment: ${props => props.backgroundAttachment};
//   background-size: ${props => props.backgroundSize};
//   border: ${props => props.border};
//   border-top: ${props => props.borderTop};
//   border-bottom: ${props => props.borderBottom};
//   border-left: ${props => props.borderLeft};
//   border-right: ${props => props.borderRight};
//   border-radius: ${props => props.borderRadius};
//   order: ${props => props.order};
//   min-width: ${props => props.minWidth};
//   box-shadow ${props => props.boxShadow};
//   max-height: ${props => props.maxHeight};
//   max-width: ${props => props.maxWidth};

//     &:hover {
//       background: ${props => props.hoverBackgroundColor};
//       background-size: ${props => props.hoverBackgroundSize};
//       cursor: ${props => props.cursor};
//     }

//     &:hover * {
//       color: ${props => props.hoverColor};
//     }

//     @media (max-width: 768px){
//       height: ${props => props.tabletHeight};
//       width: ${props => props.tabletWidth};
//       background: ${props => props.backgroundColor},
//         url(${props => props.mobileBackground})
//         ${props => props.backgroundRepeat}
//         ${props => props.backgroundAttachment}
//         ${props => props.backgroundPosition};
//       flex-direction: ${props => props.smallTabletFlexDirection};
//     }

//     @media (max-width: 400px){
//       height: ${props => props.mobileHeight};
//       background-position: ${props => props.mobileBackgroundPosition || 'top center'};
//     }
// `

// export const TWPHeader = styled.h1.attrs({
//   width: props => props.width || '100%',
//   textAlign: props => props.textAlign || 'center',
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || '0 2%',
//   fontFamily: props => props.fontFamily || LVStyleGuide.font.family.plex,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.large,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.threeHundred
// })`
//   width: ${props => props.width};
//   text-align: ${props => props.textAlign};
//   margin: ${props => props.margin};
//   background-color: ${props => props.backgroundColor || null};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};

//   @media (max-width: 992px) {
//     font-size: ${props => props.tabletFontSize || null};
//   }

//   @media (max-width: 768px) {
//     font-size: ${props => props.smallTabletFontSize || null};
//   }

//   @media (max-width: 400px) {
//     font-size: ${props => props.mobileFontSize || null};
//   }
// `

// export const TWPSectionHeader = styled.h2.attrs({
//   width: props => props.width || null,
//   textAlign: props => props.textAlign || 'center',
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || '0 2%',
//   fontFamily: props => props.fontFamily || LVStyleGuide.font.family.plex,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.mediumSmall,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.threeHundred
// })`
//   width: ${props => props.width};
//   text-align: ${props => props.textAlign};
//   margin: ${props => props.margin};
//   background-color: ${props => props.backgroundColor};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};

//   @media (max-width: 992px) {
//     font-size: ${props => props.tabletFontSize || null};
//   }

//   @media (max-width: 768px) {
//     font-size: ${props => props.smallTabletFontSize || null};
//   }

//   @media (max-width: 400px) {
//     font-size: ${props => props.mobileFontSize || null};
//   }
// `

// export const TWPParagraph = styled.h3.attrs({
//   width: props => props.width || '100%',
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || '0 2%',
//   fontFamily: props => props.fontFamily || LVStyleGuide.font.family.plex,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.small,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.threeHundred,
//   textAlign: props => props.textAlign || 'left',
//   border: props => props.botder || null,
//   whiteSpace: props => props.whiteSpace || 'pre-line'
// })`
//   border: ${props => props.border};
//   width: ${props => props.width};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   text-decoration: ${props => props.textDecoration};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-align: ${props => props.textAlign};
//   white-space: ${props => props.whiteSpace};

//   @media (max-width: 992px) {
//     font-size: ${props => props.tabletFontSize || null};
//   }

//   @media (max-width: 768px) {
//     font-size: ${props => props.smallTabletFontSize || null};
//   }

//   @media (max-width: 400px) {
//     font-size: ${props => props.mobileFontSize || null};
//   }
// `

// export const TWPAnchor = styled.a.attrs({
//   height: props => props.height,
//   width: props => props.width,
//   display: props => props.display || 'flex',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flexWrap: props => props.flexWrap || null,
//   flex: props => props.flex || 'wrap',
//   backgroundColor: props => props.backgroundColor,
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || null,
//   fontFamily: props => props.fontFamily || LVStyleGuide.font.family.plex,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.small,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.threeHundred,
//   textDecoration: props => props.textDecoration || 'none',
//   textAlign: props => props.textAlign || 'center'
// })`
//   display: ${props => props.display};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex-wrap: ${props => props.flexWrap};
//   flex: ${props => props.flex};
//   height: ${props => props.height};
//   width: ${props => props.width};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   background-color: ${props => props.backgroundColor};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-decoration: ${props => props.textDecoration};
//   text-align: ${props => props.textAlign};

//   &:hover {
//     color: ${props => props.hoverColor || 'white'};
//     background-color: ${props => props.hoverBackgroundColor};
//     cursor: pointer;
//   }
// `

// export const TWPAnchorHomeNav = styled.a.attrs({
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || null,
//   fontFamily: props => props.fontFamily || LVStyleGuide.font.family.plex,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.small,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.threeHundred,
//   textDecoration: props => props.textDecoration || 'none',
//   width: props => props.width || '100%',
//   border: props => props.border || '1px solid white',
//   textAlign: props => props.textAlign || 'center'
// })`
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-decoration: ${props => props.textDecoration};
//   width: ${props => props.width};
//   border: ${props => props.border};
//   text-align: ${props => props.textAlign};
//   transition: all ease 0.8s;

//   &:hover {
//     border-radius: 100px;
//     box-shadow: inset 560px 0 0 0 ${LVStyleGuide.color.darkBlue};
//     color: ${LVStyleGuide.color.white};
//   }
// `

// export const TWPCard = styled.a.attrs({
//   display: props => props.display || 'flex',
//   border: props => props.border || null,
//   borderRadius: props => props.borderRadius || '5px',
//   padding: props => props.padding || '0 2%',
//   margin: props => props.margin || '0px',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flex: props => props.flex || null,
//   height: props => props.height || null,
//   width: props => props.width || null,
//   backgroundColor: props => props.backgroundColor || null,
//   backgroundImage: props => props.desktopImage || null,
//   backgroundRepeat: props => props.backgroundRepeat || 'no-repeat',
//   backgroundAttachment: props => props.backgroundAttachment,
//   backgroundPosition: props => props.backgroundPosition,
//   boxShadow: props =>
//     props.boxShadow || `0px 1px 10px 1px ${LVStyleGuide.color.lightGray}`,
//   textDecoration: props => props.textDecoration || 'none'
// })`
//   display: ${props => props.display};
//   border: ${props => props.border};
//   border-radius: ${props => props.borderRadius};
//   padding: ${props => props.padding};
//   margin: ${props => props.margin};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex: ${props => props.flex};
//   align-items: ${props => props.alignItems};
//   height: ${props => props.height};
//   width: ${props => props.width};
//   background-color: ${props => props.backgroundColor};
//   background-image: (${props => props.desktopImage});
//   background-repeat: ${props => props.backgroundRepeat};
//   background-attachment: ${props => props.backgroundAttachment};
//   background-position: ${props => props.backgroundPosition};
//   box-shadow: ${props => props.boxShadow};
//   text-decoration: ${props => props.textDecoration};

//   @media (max-width: 768px) {
//     height: ${props => props.tabletHeight};
//     background: ${props => props.backgroundColor},
//       url(${props => props.mobileBackground}) ${props => props.backgroundRepeat}
//         ${props => props.backgroundAttachment} ${props => props.backgroundPosition};
//   }

//   @media (max-width: 400px) {
//     height: ${props => props.mobileHeight};
//     background-position: top center;
//   }
// `

// export const FooterGridLink = styled.a.attrs({
//   border: props => props.border || null,
//   borderLeft: props => props.borderLeft || null,
//   borderRight: props => props.borderRight || null,
//   borderBottom: props => props.borderBottom || null,
//   bordeTop: props => props.borderTop || null,
//   width: props => props.width || '100%',
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.white,
//   padding: props => props.padding || '1% 2%',
//   fontFamily: props => props.fontFamily || LVStyleGuide.font.family.plex,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.small,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.threeHundred,
//   textAlign: props => props.textAlign || 'left',
//   textDecoration: props => props.textDecoration || 'none'
// })`
//   text-decoration: ${props => props.textDecoration};
//   border: ${props => props.border};
//   border-top: ${props => props.borderTop};
//   border-bottom: ${props => props.borderBottom};
//   border-left: ${props => props.borderLeft};
//   border-right: ${props => props.borderRight};
//   width: ${props => props.width};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-align: ${props => props.textAlign};
//   transition: all ease 0.8s;

//   &:hover {
//     background-color: ${LVStyleGuide.color.white};
//     color: ${LVStyleGuide.color.black};
//   }

//   @media (max-width: 768px) {
//     font-size: ${LVStyleGuide.font.size.tiny};
//     border-bottom: none;
//   }

//   @media (max-width: 400px) {
//     font-size: ${LVStyleGuide.font.size.finePrint};
//   }
// `

// export const TWPFooterAnchor = styled.a.attrs({
//   height: props => props.height,
//   width: props => props.width,
//   display: props => props.display || 'flex',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flexWrap: props => props.flexWrap || null,
//   flex: props => props.flex || 'wrap',
//   backgroundColor: props => props.backgroundColor,
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || null,
//   fontFamily: props => props.fontFamily || LVStyleGuide.font.family.plex,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.small,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.threeHundred,
//   textDecoration: props => props.textDecoration || 'none',
//   textAlign: props => props.textAlign || 'center'
// })`
//   display: ${props => props.display};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex-wrap: ${props => props.flexWrap};
//   flex: ${props => props.flex};
//   height: ${props => props.height};
//   width: ${props => props.width};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   background-color: ${props => props.backgroundColor};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-decoration: ${props => props.textDecoration};
//   text-align: ${props => props.textAlign};

//   &:hover {
//     color: ${props => props.hoverColor || 'white'};
//     background-color: ${props => props.hoverBackgroundColor};
//     cursor: pointer;
//   }

//   @media (max-width: 768px) {
//     font-size: ${LVStyleGuide.font.size.small};
//   }

//   @media (max-width: 550px) {
//     font-size: ${LVStyleGuide.font.size.smallTiny};
//   }

//   @media (max-width: 400px) {
//     font-size: ${LVStyleGuide.font.size.tiny};
//   }
// `

// export const TWPImage = styled.img`
//   max-width: ${props => props.maxWidth || null};
//   max-height: ${props => props.maxHeight || null};
//   width: ${props => props.width || '100%'};
//   height: ${props => props.height || '100%'};
//   margin: ${props => props.margin};
//   padding: ${props => props.padding};
//   border-radius: ${props => (props.borderRadius ? props.borderRadius : '0px')};
//   box-shadow: ${props => (props.boxShadow ? props.boxShadow : null)} @media
//     (max-width: 992px) {
//     height: ${props => props.tabletHeight};
//     width: ${props => props.tabletWidth};
//   }

//   @media (max-width: 768px) {
//     height: ${props => props.smallTabletHeight};
//     width: ${props => props.smallTabletWidth};
//   }

//   @media (max-width: 400px) {
//     height: ${props => props.mobileHeight};
//     width: ${props => props.mobileWidth};
//   }
// `

// export const TWPButton = styled.button`
//   height: ${props => props.height};
//   width: ${props => props.width};
//   background-color: ${props => props.backgroundColor};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   margin: ${props => props.margin};
//   border-radius: ${props => props.borderRadius};
//   font-size: ${props => props.fontSize};
//   border: ${props => props.border};

//   &:hover {
//     color: ${props => props.hoverColor};
//     cursor: pointer;
//     background-color: ${props => props.hoverBackground};
//   }
// `
// export const BLDiv = styled.div.attrs({
//   display: props => props.display || 'flex',
//   position: props => props.position || null,
//   padding: props => props.padding || '0 2%',
//   margin: props => props.margin || '0px',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flexWrap: props => props.flexWrap || null,
//   flex: props => props.flex || 'wrap',
//   height: props => props.height || null,
//   width: props => props.width || null,
//   maxWidth: props => props.maxWidth || null,
//   order: props => props.order || null,
//   backgroundColor: props => props.backgroundColor || null,
//   background: props => props.background,
//   backgroundImage: props => props.desktopImage || null,
//   backgroundRepeat: props => props.backgroundRepeat || 'no-repeat',
//   backgroundAttachment: props => props.backgroundAttachment || null,
//   backgroundPosition: props => props.backgroundPosition || 'center center',
//   backgroundSize: props => props.backgroundSize || null,
//   border: props => props.border || null,
//   borderLeft: props => props.borderLeft || null,
//   borderRight: props => props.borderRight || null,
//   borderBottom: props => props.borderBottom || null,
//   borderTop: props => props.borderTop || null,
//   borderRadius: props => props.borderRadius || null,
//   cursor: props => props.cursor || null
// })`
//   display: ${props => props.display};
//   position: ${props => props.position};
//   padding: ${props => props.padding};
//   margin: ${props => props.margin};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex-wrap: ${props => props.flexWrap};
//   flex: ${props => props.flex};
//   align-items: ${props => props.alignItems};
//   height: ${props => (props.height ? props.height : 'auto')};
//   width: ${props => props.width};
//   max-width: ${props => props.maxWidth};
//   background-color: ${props => props.backgroundColor};
//   background: ${props => props.background};
//   background-image: url(${props => props.desktopImage});
//   background-repeat: ${props => props.backgroundRepeat};
//   background-attachment: ${props => props.backgroundAttachment};
//   background-position: ${props => props.backgroundPosition};
//   background-size: ${props => props.backgroundSize};
//   border: ${props => props.border};
//   border-top: ${props => props.borderTop};
//   border-bottom: ${props => props.borderBottom};
//   border-left: ${props => props.borderLeft};
//   border-right: ${props => props.borderRight};
//   border-radius: ${props => props.borderRadius};
//   order: ${props => props.order};

//   &:hover {
//     background: ${props => props.hoverBackgroundColor};
//     background-size: ${props => props.hoverBackgroundSize};
//     cursor: ${props => props.cursor};
//   }

//   &:hover * {
//     color: ${props => props.hoverColor};
//   }

//   @media (max-width: mediaQueryMediumMaxWidth) {
//     height: ${props => props.tabletHeight || props.height};
//     background: ${props => props.backgroundColor},
//       url(${props => props.mobileBackground || props.background})
//         ${props => props.backgroundRepeat} ${props => props.backgroundAttachment}
//         ${props => props.backgroundPosition};
//     flex-direction: ${props => props.smallTabletFlexDirection || 'column'};
//   }

//   @media (max-width: mediaQuerySmallMaxWidth) {
//     height: ${props => props.mobileHeight || props.height};
//     background-position: top center;
//   }
// `

// export const BLHeader = styled.h1.attrs({
//   width: props => props.width || null,
//   textAlign: props => props.textAlign || 'center',
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.bodyText,
//   padding: props => props.padding || '0 2%',
//   fontFamily: props => props.fontFamily || headerFont,

//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.fiveHundred
// })`
//   width: ${props => props.width || '100%'};
//   text-align: ${props => props.textAlign};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily || defaultFont};
//   font-size: ${props => props.fontSize || LVStyleGuide.font.size.large};
//   font-weight: ${props => props.fontWeight};

//   &:hover {
//       color: ${props => props.hoverColor || null};
//       cursor: ${props => props.cursorType || null};
//   }

//   ${media.desktop`font-size: ${props =>
//     props.tabletFontSize || LVStyleGuide.font.size.mediumLarge};`}
//   ${media.tablet`font-size: ${props => props.smallTabletFontSize || null};`}
//   ${media.phone`font-size: ${props => props.mobileFontSize || null};`}
// `

// export const BLSectionHeader = styled.h2.attrs({
//   width: props => props.width || null,
//   textAlign: props => props.textAlign || 'center',
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || '0 2%',
//   fontFamily: props => props.fontFamily || headerFont,
//   // fontSize: props => props.fontSize ,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.fiveHundred
// })`
//   width: ${props => props.width};
//   text-align: ${props => props.textAlign};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize || LVStyleGuide.font.size.medium};
//   font-weight: ${props => props.fontWeight};

//   &:hover {
//     color: ${props => props.hoverColor || null};
//     cursor: ${props => props.cursorType || null};
// }

//   ${media.desktop`font-size: ${props =>
//     props.tabletFontSize || LVStyleGuide.font.size.mediumSmall};`}
//   ${media.tablet`font-size: ${props => props.smallTabletFontSize || null};`}
//   ${media.phone`font-size: ${props => props.mobileFontSize || null};`}
// `

// export const BLParagraph = styled.h3.attrs({
//   width: props => props.width || null,
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.bodyText,
//   padding: props => props.padding || '0 2%',
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.mediumSmall,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.medium,
//   textAlign: props => props.textAlign || 'left',
//   border: props => props.botder || null
// })`
//   border: ${props => props.border};
//   width: ${props => props.width};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   text-decoration: ${props => props.textDecoration};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily || defaultFont};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-align: ${props => props.textAlign};

//   &:hover {
//     color: ${props => props.hoverColor || null};
//     cursor: ${props => props.cursorType || null};
// }

//   ${media.desktop`font-size: ${props =>
//     props.tabletFontSize || LVStyleGuide.font.size.small};`}
//   ${media.tablet`font-size: ${props =>
//     props.smallTabletFontSize || LVStyleGuide.font.size.smallTiny};`}
//   ${media.phone`font-size: ${props =>
//     props.mobileFontSize || LVStyleGuide.font.size.tiny};`}
// `

// export const BLAnchor = styled.a.attrs({
//   height: props => props.height,
//   width: props => props.width,
//   display: props => props.display || 'flex',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flexWrap: props => props.flexWrap || null,
//   flex: props => props.flex || 'wrap',
//   backgroundColor: props => props.backgroundColor,
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || null,
//   fontFamily: props => props.fontFamily || headerFont,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.fiveHundred,
//   textDecoration: props => props.textDecoration || 'none',
//   textAlign: props => props.textAlign || 'center',
//   border: props => props.border || null
// })`
//   display: ${props => props.display};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex-wrap: ${props => props.flexWrap};
//   flex: ${props => props.flex};
//   height: ${props => props.height};
//   width: ${props => props.width};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   background-color: ${props => props.backgroundColor};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize || LVStyleGuide.font.size.mediumLarge};
//   font-weight: ${props => props.fontWeight};
//   text-decoration: ${props => props.textDecoration};
//   text-align: ${props => props.textAlign};
//   border: ${props => props.border};

//   &:hover {
//     color: ${props => props.hoverColor || LVStyleGuide.color.background};
//     background-color: ${props => props.hoverBackgroundColor};
//     cursor: pointer;
//   }

//   ${media.desktop`font-size: ${props =>
//     props.tabletFontSize || LVStyleGuide.font.size.mediumLarge};`}
//   ${media.tablet`font-size: ${props =>
//     props.smallTabletFontSize || LVStyleGuide.font.size.medium};`}
//   ${media.phone`font-size: ${props =>
//     props.mobileFontSize || LVStyleGuide.font.size.mediumSmall};`}

// `

// export const BLAnchorHomeNav = styled.a.attrs({
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || null,
//   fontFamily: props => props.fontFamily || headerFont,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.small,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.fiveHundred,
//   textDecoration: props => props.textDecoration || 'none',
//   width: props => props.width || '100%',
//   height: props => props.height || '100%',
//   maxWidth: props => props.maxWidth || '100%',
//   maxHeight: props => props.maxHeight || '100%',
//   border: props => props.border || '1px solid white',
//   textAlign: props => props.textAlign || 'center'
// })`
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-decoration: ${props => props.textDecoration};
//   width: ${props => props.width};
//   max-width: ${props => props.maxWidth};
//   height: ${props => props.maxHeight};
//   max-height: ${props => props.width};
//   border: ${props => props.border};
//   text-align: ${props => props.textAlign};
//   transition: all ease 0.8s;

//   &:hover {
//     border-radius: 100px;
//     box-shadow: inset 560px 0 0 0 ${LVStyleGuide.color.darkBlue};
//     color: ${LVStyleGuide.color.white};
//   }
// `

// export const BLCard = styled.a.attrs({
//   display: props => props.display || 'flex',
//   border: props => props.border || null,
//   borderRadius: props => props.borderRadius || '5px',
//   padding: props => props.padding || '0 2%',
//   margin: props => props.margin || '0px',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flex: props => props.flex || null,
//   height: props => props.height || null,
//   width: props => props.width || null,
//   backgroundColor: props => props.backgroundColor || null,
//   backgroundImage: props => props.desktopImage || null,
//   backgroundRepeat: props => props.backgroundRepeat || 'no-repeat',
//   backgroundAttachment: props => props.backgroundAttachment,
//   backgroundPosition: props => props.backgroundPosition,
//   boxShadow: props =>
//     props.boxShadow || `0px 1px 10px 1px ${LVStyleGuide.color.lightGray}`,
//   textDecoration: props => props.textDecoration || 'none'
// })`
//   display: ${props => props.display};
//   border: ${props => props.border};
//   border-radius: ${props => props.borderRadius};
//   padding: ${props => props.padding};
//   margin: ${props => props.margin};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex: ${props => props.flex};
//   align-items: ${props => props.alignItems};
//   height: ${props => props.height};
//   width: ${props => props.width};
//   background-color: ${props => props.backgroundColor};
//   background-image: (${props => props.desktopImage});
//   background-repeat: ${props => props.backgroundRepeat};
//   background-attachment: ${props => props.backgroundAttachment};
//   background-position: ${props => props.backgroundPosition};
//   box-shadow: ${props => props.boxShadow};
//   text-decoration: ${props => props.textDecoration};

//   ${media.desktop`
//     height: ${props => props.tabletHeight};
//     background: ${props => props.backgroundColor},
//       url(${props => props.mobileBackground})
//       ${props => props.backgroundRepeat}
//       ${props => props.backgroundAttachment}
//       ${props => props.backgroundPosition}
//     `}
//   ${media.phone`
//     height: ${props => props.mobileHeight};
//     background-position: top center;
//     `}
// `

// export const BLFooterAnchor = styled.a.attrs({
//   height: props => props.height,
//   width: props => props.width,
//   display: props => props.display || 'flex',
//   flexDirection: props => props.flexDirection || 'column',
//   justifyContent: props => props.justifyContent || 'center',
//   alignItems: props => props.alignItems || 'center',
//   flexWrap: props => props.flexWrap || null,
//   flex: props => props.flex || 'wrap',
//   backgroundColor: props => props.backgroundColor,
//   margin: props => props.margin || '0px',
//   color: props => props.color || LVStyleGuide.color.black,
//   padding: props => props.padding || null,
//   fontFamily: props => props.fontFamily || headerFont,
//   fontSize: props => props.fontSize || LVStyleGuide.font.size.small,
//   fontWeight: props => props.fontWeight || LVStyleGuide.font.weight.fiveHundred,
//   textDecoration: props => props.textDecoration || 'none',
//   textAlign: props => props.textAlign || 'center'
// })`
//   display: ${props => props.display};
//   flex-direction: ${props => props.flexDirection};
//   justify-content: ${props => props.justifyContent};
//   flex-wrap: ${props => props.flexWrap};
//   flex: ${props => props.flex};
//   height: ${props => props.height};
//   width: ${props => props.width};
//   margin: ${props => props.margin};
//   color: ${props => props.color};
//   background-color: ${props => props.backgroundColor};
//   padding: ${props => props.padding};
//   font-family: ${props => props.fontFamily};
//   font-size: ${props => props.fontSize};
//   font-weight: ${props => props.fontWeight};
//   text-decoration: ${props => props.textDecoration};
//   text-align: ${props => props.textAlign};

//   &:hover {
//     color: ${props => props.hoverColor || LVStyleGuide.color.background};
//     background-color: ${props => props.hoverBackgroundColor};
//     cursor: pointer;
//   }

//   ${media.desktop`font-size: ${LVStyleGuide.font.size.small};`}
//   ${media.tablet`font-size: ${LVStyleGuide.font.size.smallTiny};`}
//   ${media.phone`font-size:  ${LVStyleGuide.font.size.tiny};`}
// `

// export const BLImage = styled.img`
//   max-width: ${props => props.maxWidth || null};
//   max-height: ${props => props.maxHeight || null};
//   min-width: ${props => props.minWidth || null};
//   min-height: ${props => props.minHeight || null};
//   width: ${props => props.width || '100%'};
//   height: ${props => props.height || '100%'};
//   border-radius: ${props => (props.borderRadius ? props.borderRadius : '0px')};
//   box-shadow: ${props => (props.boxShadow ? props.boxShadow : '1px 1px 28px 2px grey')}
//     ${media.desktop`height: ${props => props.tabletHeight};`}
//     ${media.tablet`height: ${props => props.smallTabletHeight};`}
//     ${media.phone`height: ${props => props.mobileHeight};`};
// `

// export const BLButton = styled.button`
//   height: ${props => props.height};
//   width: ${props => props.width};
//   background-color: ${props => props.backgroundColor || LVStyleGuide.color.background};
//   color: ${props => props.color || LVStyleGuide.color.title};
//   padding: ${props => props.padding};
//   margin: ${props => props.margin};
//   border: ${props => props.border || null};
//   border-radius: ${props => props.borderRadius || '10px'};
//   border-color: ${props => props.borderColor || null};
//   font-size: ${props => props.fontSize || LVStyleGuide.font.size.mediumLarge};
//   font-family: ${props => props.fontFamily || headerFont};
//   font-weight: ${props => props.fontWeight};

//   &:hover {
//     color: ${props => props.hoverColor || LVStyleGuide.color.highlight};
//     cursor: pointer;
//     background-color: ${props => props.hoverBackground || LVStyleGuide.color.secondary};
//   }
// `

// export const BigSectionDiv = BLDiv.extend`
//   height: 500px;
//   ${media.desktop`
//     height: 400px;
//   `}
//   ${media.tablet`
//     height: 350px;
//   `}
//   ${media.phone`
//     height: 300px;
//   `}
// `
// export const HugeSectionDiv = BLDiv.extend`
//   max-height: 650px;
//   min-height: 650px;
//   padding: 0px;
//   width: 100%;
//   ${media.giant`min-height: 650px`}
//   ${media.desktop`min-height: 600px`}
//   ${media.tablet`min-height:  500px `}
//   ${media.phone`min-height: 400px`}
// `
