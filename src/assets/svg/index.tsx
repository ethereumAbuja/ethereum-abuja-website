import { useAppSelector } from "@/hooks/rtkHooks";
import { SvgProps } from "@/lib/components/types";
import { SVGProps } from "react";

export function ETHABJ_SVG() {
  const { appTheme } = useAppSelector((state: any) => state.themeReducer);

  return {
    // =================================================================APP LOGO =================================================================
    logo: (props?: SvgProps) => {
      return (
        <svg
          width={169}
          height={49}
          viewBox="0 0 169 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M59.34 34V20h9.32v2.28h-6.68v3.4h5.36v2.28h-5.36v3.74h6.9V34h-9.54zm14.682 0V22.28h-4.24V20h11.1v2.28h-4.22V34h-2.64zm17.03-14h2.64v14h-2.64v-6.02h-6.24V34h-2.64V20h2.64v5.68h6.24V20z"
            fill="#000"
          />
          <path
            d="M106.091 34l-1.44-3.78h-6.24L96.951 34h-1.78l5.58-14h1.54l5.58 14h-1.78zm-7.1-5.3h5.06l-2.52-6.6-2.54 6.6zm15.369 5.46c-1.4 0-2.72-.72-3.34-1.82V34h-1.6V19.78h1.6v5.78c.62-1.08 1.92-1.8 3.34-1.8 3.14 0 4.86 2.26 4.86 5.2 0 2.94-1.72 5.2-4.86 5.2zm-.14-1.44c2.04 0 3.36-1.48 3.36-3.76s-1.32-3.76-3.36-3.76c-2.02 0-3.34 1.48-3.34 3.76s1.32 3.76 3.34 3.76zm15.733-8.8V34h-1.6v-1.94c-.52 1.4-1.76 2.1-3.32 2.1-2.28 0-3.76-1.62-3.76-4.08v-6.16h1.6v5.9c0 1.72 1 2.88 2.52 2.88 1.74 0 2.96-1.38 2.96-3.34v-5.44h1.6zm2.586-4.14h1.84v2.24h-1.84v-2.24zm.14 4.14h1.6v10.86c0 2.12-.7 3.3-2.9 3.3h-.92V36.7h.82c1.3 0 1.4-.64 1.4-1.98v-10.8zm8.139-.16c2.62 0 4.26 1.5 4.26 3.74V34h-1.6v-1.74c-.54 1.16-1.88 1.9-3.44 1.9-2.12 0-3.5-1.2-3.5-3.04 0-1.92 1.58-3.14 4.02-3.14h2.28c.44 0 .64-.22.64-.54 0-1.38-.98-2.32-2.7-2.32-1.48 0-2.64.92-2.72 2.02h-1.52c.18-1.94 2.02-3.38 4.28-3.38zm-.54 9.04c2.02 0 3.2-1.26 3.2-3.34v-.26h-2.82c-1.5 0-2.48.72-2.48 1.9 0 1.04.82 1.7 2.1 1.7z"
            fill="#314D53"
          />
          <path
            d="M21.703 24.882a.415.415 0 00-.331 0L1 33.73l6.925 3.007 13.612 5.912 13.612-5.912 6.925-3.007-20.371-8.848z"
            fill="#E5F8FF"
          />
          <path
            d="M1 39.473c0 .165.098.315.25.38l20.287 8.811V42.65L7.925 36.737 1 33.73v5.743z"
            fill="#A8A3EB"
          />
          <path
            d="M21.537 48.664l20.287-8.81a.415.415 0 00.25-.381V33.73l-6.925 3.007-13.612 5.912v6.015z"
            fill="#CFCCF4"
          />
          <path
            d="M1 33.73l20.372-8.848a.415.415 0 01.33 0l20.372 8.848M1 33.73v5.743c0 .165.098.315.25.38l20.287 8.811M1 33.73l6.925 3.007 13.612 5.912m20.537-8.92v5.744a.415.415 0 01-.25.38l-20.287 8.811M42.074 33.73l-6.925 3.007-13.612 5.912m0 0v6.015"
            stroke="#4564A0"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M21.704 21.975a.416.416 0 00-.331 0L4.398 29.347l5.78 2.51 11.36 4.934L32.9 31.857l5.78-2.51-16.975-7.372z"
            fill="#E5F8FF"
          />
          <path
            d="M4.398 34.095c0 .165.099.315.25.381l16.89 7.336v-5.02l-11.36-4.935-5.78-2.51v4.748z"
            fill="#A8A3EB"
          />
          <path
            d="M21.538 41.812l16.89-7.336a.415.415 0 00.25-.381v-4.748l-5.779 2.51-11.36 4.934v5.02z"
            fill="#CFCCF4"
          />
          <path
            d="M4.398 29.347l16.975-7.372a.416.416 0 01.33 0l16.976 7.372m-34.28 0v4.748c0 .165.098.315.25.381l16.89 7.336M4.398 29.347l5.779 2.51 11.36 4.934m17.14-7.444v4.748a.415.415 0 01-.25.381l-16.89 7.336m17.14-12.465l-5.779 2.51-11.36 4.934m0 0v5.02"
            stroke="#4564A0"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M21.701 19.1a.415.415 0 00-.33 0L6.85 25.406l4.952 2.15 9.733 4.227 9.733-4.227 4.951-2.15L21.701 19.1z"
            fill="#E5F8FF"
          />
          <path
            d="M6.852 29.434c0 .166.098.315.25.381l14.434 6.27v-4.302l-9.733-4.227-4.951-2.15v4.028z"
            fill="#A8A3EB"
          />
          <path
            d="M21.536 36.084l14.434-6.269a.415.415 0 00.25-.38v-4.03l-4.951 2.151-9.733 4.227v4.301z"
            fill="#CFCCF4"
          />
          <path
            d="M6.852 25.406L21.37 19.1a.415.415 0 01.331 0l14.519 6.306m-29.368 0v4.028c0 .166.098.315.25.381l14.434 6.27M6.852 25.404l4.95 2.151 9.734 4.227m14.684-6.377v4.028a.415.415 0 01-.25.381l-14.434 6.27m14.684-10.68l-4.951 2.151-9.733 4.227m0 0v4.301"
            stroke="#4564A0"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M21.536 23.925l5.607 2.37 2.284-.992-7.891-3.427v2.05zM15.929 26.295l-2.284-.992 7.89-3.427v2.05l-5.606 2.369z"
            fill="#08061D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.427 25.303l-2.284.992-5.607-2.37v-2.05l7.891 3.428z"
            fill="#08061D"
          />
          <path
            d="M21.536 28.73l-5.607-2.435 5.607-2.37 5.607 2.37-5.607 2.435z"
            fill="#00384D"
          />
          <path
            d="M13.645 25.303l7.89 3.427m-7.89-3.427l2.284.992m-2.284-.992l7.89-3.427m0 6.854l7.892-3.427m-7.891 3.427l-5.607-2.435m5.607 2.435l5.607-2.435m2.284-.992l-2.284.992m2.284-.992l-7.891-3.427m0 0v2.05m-5.607 2.369l5.607-2.37m5.607 2.37l-5.607-2.37"
            stroke="#000"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M29.152 13.386L21.516 1v8.237l7.636 4.15z"
            fill="#9DFF9B"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M21.391 1l-7.7 12.325 7.7-4.088V1z"
            fill="url(#paint0_linear_199_4421)"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M21.486 25.777l-7.795-11.44 7.795 4.637v6.803z"
            fill="#000"
            stroke="#9DFF9B"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M29.502 14.245l-7.826 4.728v6.742l7.826-11.47z"
            fill="#010000"
            stroke="#9DFF9B"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M14.89 13.953l6.533-3.417v7.383l-6.532-3.966z"
            fill="#018752"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M21.484 17.92l6.375-3.936-6.375-3.448v7.383z"
            fill="#9DFF9B"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_199_4421"
              x1={17.5413}
              y1={1}
              x2={17.5413}
              y2={13.325}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#018752" />
            </linearGradient>
          </defs>
        </svg>
      );
    },
    logo2: (props?: SvgProps) => {
      return (
        <svg
          width={110}
          height={120}
          viewBox="0 0 43 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M21.703 24.882a.415.415 0 00-.331 0L1 33.73l6.925 3.007 13.612 5.912 13.612-5.912 6.925-3.007-20.371-8.848z"
            fill="#E5F8FF"
          />
          <path
            d="M1 39.473c0 .165.098.315.25.38l20.287 8.811V42.65L7.925 36.737 1 33.73v5.743z"
            fill="#A8A3EB"
          />
          <path
            d="M21.537 48.664l20.287-8.81a.415.415 0 00.25-.381V33.73l-6.925 3.007-13.612 5.912v6.015z"
            fill="#CFCCF4"
          />
          <path
            d="M1 33.73l20.372-8.848a.415.415 0 01.33 0l20.372 8.848M1 33.73v5.743c0 .165.098.315.25.38l20.287 8.811M1 33.73l6.925 3.007 13.612 5.912m20.537-8.92v5.744a.415.415 0 01-.25.38l-20.287 8.811M42.074 33.73l-6.925 3.007-13.612 5.912m0 0v6.015"
            stroke="#4564A0"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M21.704 21.975a.416.416 0 00-.331 0L4.398 29.347l5.78 2.51 11.36 4.934L32.9 31.857l5.78-2.51-16.975-7.372z"
            fill="#E5F8FF"
          />
          <path
            d="M4.398 34.095c0 .165.099.315.25.381l16.89 7.336v-5.02l-11.36-4.935-5.78-2.51v4.748z"
            fill="#A8A3EB"
          />
          <path
            d="M21.538 41.812l16.89-7.336a.415.415 0 00.25-.381v-4.748l-5.779 2.51-11.36 4.934v5.02z"
            fill="#CFCCF4"
          />
          <path
            d="M4.398 29.347l16.975-7.372a.416.416 0 01.33 0l16.976 7.372m-34.28 0v4.748c0 .165.098.315.25.381l16.89 7.336M4.398 29.347l5.779 2.51 11.36 4.934m17.14-7.444v4.748a.415.415 0 01-.25.381l-16.89 7.336m17.14-12.465l-5.779 2.51-11.36 4.934m0 0v5.02"
            stroke="#4564A0"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M21.701 19.1a.415.415 0 00-.33 0L6.85 25.406l4.952 2.15 9.733 4.227 9.733-4.227 4.951-2.15L21.701 19.1z"
            fill="#E5F8FF"
          />
          <path
            d="M6.852 29.434c0 .166.098.315.25.381l14.434 6.27v-4.302l-9.733-4.227-4.951-2.15v4.028z"
            fill="#A8A3EB"
          />
          <path
            d="M21.536 36.084l14.434-6.269a.415.415 0 00.25-.38v-4.03l-4.951 2.151-9.733 4.227v4.301z"
            fill="#CFCCF4"
          />
          <path
            d="M6.852 25.406L21.37 19.1a.415.415 0 01.331 0l14.519 6.306m-29.368 0v4.028c0 .166.098.315.25.381l14.434 6.27M6.852 25.404l4.95 2.151 9.734 4.227m14.684-6.377v4.028a.415.415 0 01-.25.381l-14.434 6.27m14.684-10.68l-4.951 2.151-9.733 4.227m0 0v4.301"
            stroke="#4564A0"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M21.536 23.925l5.607 2.37 2.284-.992-7.891-3.427v2.05zM15.929 26.295l-2.284-.992 7.89-3.427v2.05l-5.606 2.369z"
            fill="#08061D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.427 25.303l-2.284.992-5.607-2.37v-2.05l7.891 3.428z"
            fill="#08061D"
          />
          <path
            d="M21.536 28.73l-5.607-2.435 5.607-2.37 5.607 2.37-5.607 2.435z"
            fill="#00384D"
          />
          <path
            d="M13.645 25.303l7.89 3.427m-7.89-3.427l2.284.992m-2.284-.992l7.89-3.427m0 6.854l7.892-3.427m-7.891 3.427l-5.607-2.435m5.607 2.435l5.607-2.435m2.284-.992l-2.284.992m2.284-.992l-7.891-3.427m0 0v2.05m-5.607 2.369l5.607-2.37m5.607 2.37l-5.607-2.37"
            stroke="#000"
            strokeWidth={0.0415333}
            strokeLinejoin="round"
          />
          <path
            d="M29.152 13.386L21.516 1v8.237l7.636 4.15z"
            fill="#9DFF9B"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M21.391 1l-7.7 12.325 7.7-4.088V1z"
            fill="url(#paint0_linear_199_4423)"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M21.486 25.777l-7.795-11.44 7.795 4.637v6.803z"
            fill="#000"
            stroke="#9DFF9B"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M29.502 14.245l-7.826 4.728v6.742l7.826-11.47z"
            fill="#010000"
            stroke="#9DFF9B"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M14.89 13.953l6.533-3.417v7.383l-6.532-3.966z"
            fill="#018752"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <path
            d="M21.484 17.92l6.375-3.936-6.375-3.448v7.383z"
            fill="#9DFF9B"
            stroke="#000"
            strokeWidth={0.529794}
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_199_4423"
              x1={17.5413}
              y1={1}
              x2={17.5413}
              y2={13.325}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#018752" />
            </linearGradient>
          </defs>
        </svg>
      );
    },
    footerLogo: (props?: SvgProps) => {
      return (
        <svg
          width={66}
          height={76}
          viewBox="0 0 66 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M33.26 38.245a.647.647 0 00-.517 0L.973 52.044l10.8 4.69L33 65.954l21.229-9.22 10.8-4.69-31.77-13.799z"
            fill="#E5F8FF"
          />
          <path
            d="M.973 61c0 .258.153.491.39.594L33 75.335v-9.38l-21.229-9.22-10.8-4.691V61z"
            fill="#A8A3EB"
          />
          <path
            d="M33.001 75.335L64.64 61.594a.648.648 0 00.39-.594v-8.956l-10.8 4.69-21.229 9.22v9.381z"
            fill="#CFCCF4"
          />
          <path
            d="M.973 52.044l31.77-13.799a.647.647 0 01.516 0l31.77 13.799m-64.056 0V61c0 .258.153.491.39.594L33 75.335M.973 52.044l10.8 4.69L33 65.954m32.029-13.91V61a.648.648 0 01-.39.594L33.001 75.335M65.03 52.044l-10.8 4.69-21.229 9.22m0 0v9.381"
            stroke="#4564A0"
            strokeWidth={0.0647733}
            strokeLinejoin="round"
          />
          <path
            d="M33.261 33.711a.648.648 0 00-.516 0L6.272 45.21l9.014 3.915 17.717 7.694 17.718-7.694 9.013-3.915L33.261 33.71z"
            fill="#E5F8FF"
          />
          <path
            d="M6.272 52.613c0 .258.154.492.39.595l26.341 11.44v-7.83l-17.717-7.694-9.014-3.915v7.404z"
            fill="#A8A3EB"
          />
          <path
            d="M33.003 64.648l26.341-11.44a.648.648 0 00.39-.595V45.21l-9.013 3.915-17.718 7.694v7.83z"
            fill="#CFCCF4"
          />
          <path
            d="M6.272 45.209L32.745 33.71a.648.648 0 01.516 0L59.734 45.21m-53.462 0v7.404c0 .258.154.492.39.595l26.341 11.44m-26.73-19.44l9.013 3.916 17.717 7.694m26.731-11.61v7.405a.648.648 0 01-.39.595l-26.34 11.44m26.73-19.44l-9.013 3.916-17.718 7.694m0 0v7.83"
            stroke="#4564A0"
            strokeWidth={0.0647733}
            strokeLinejoin="round"
          />
          <path
            d="M33.256 29.228a.647.647 0 00-.516 0l-22.643 9.834 7.722 3.354 15.179 6.592 15.179-6.592 7.722-3.354-22.643-9.834z"
            fill="#E5F8FF"
          />
          <path
            d="M10.097 45.345c0 .258.153.491.39.594l22.511 9.777v-6.708l-15.179-6.592-7.722-3.354v6.283z"
            fill="#A8A3EB"
          />
          <path
            d="M32.998 55.716l22.511-9.777a.648.648 0 00.39-.594v-6.283l-7.722 3.354-15.179 6.592v6.708z"
            fill="#CFCCF4"
          />
          <path
            d="M10.097 39.062l22.643-9.834a.647.647 0 01.516 0l22.643 9.834m-45.802 0v6.283c0 .258.153.491.39.594l22.511 9.777m-22.9-16.654l7.721 3.354 15.179 6.592m22.9-9.946v6.283a.648.648 0 01-.389.594l-22.511 9.777m22.9-16.654l-7.721 3.354-15.179 6.592m0 0v6.708"
            stroke="#4564A0"
            strokeWidth={0.0647733}
            strokeLinejoin="round"
          />
          <path
            d="M33 36.753l8.745 3.696 3.562-1.547L33 33.555v3.197zM24.256 40.449l-3.563-1.547L33 33.555v3.197l-8.744 3.696z"
            fill="#08061D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.307 38.901l-3.562 1.548L33 36.753v-3.197l12.307 5.346z"
            fill="#08061D"
          />
          <path
            d="M33 44.247l-8.744-3.798L33 36.753l8.745 3.696L33 44.247z"
            fill="#00384D"
          />
          <path
            d="M20.693 38.901L33 44.248M20.693 38.9l3.563 1.548m-3.563-1.547L33 33.555m0 10.69l12.307-5.345M33 44.248l-8.744-3.798M33 44.247l8.745-3.798m3.562-1.547l-3.562 1.547m3.562-1.547L33 33.555m0 0v3.197m-8.744 3.696L33 36.753m8.745 3.696L33 36.753"
            stroke="#000"
            strokeWidth={0.0647733}
            strokeLinejoin="round"
          />
          <path
            d="M44.88 20.317L32.97 1v12.846l11.91 6.47z"
            fill="#9DFF9B"
            stroke="#000"
            strokeWidth={0.82624}
            strokeLinejoin="round"
          />
          <path
            d="M32.774 1L20.766 20.22l12.008-6.375V1z"
            fill="url(#paint0_linear_203_4564)"
            stroke="#000"
            strokeWidth={0.82624}
            strokeLinejoin="round"
          />
          <path
            d="M32.921 39.64L20.766 21.8 32.92 29.03v10.61z"
            fill="#000"
            stroke="#9DFF9B"
            strokeWidth={0.82624}
            strokeLinejoin="round"
          />
          <path
            d="M45.422 21.655L33.217 29.03v10.515l12.205-17.89z"
            fill="#010000"
            stroke="#9DFF9B"
            strokeWidth={0.82624}
            strokeLinejoin="round"
          />
          <path
            d="M22.636 21.201l10.187-5.329v11.514l-10.187-6.185z"
            fill="#018752"
            stroke="#000"
            strokeWidth={0.82624}
            strokeLinejoin="round"
          />
          <path
            d="M32.92 27.386l9.941-6.137-9.941-5.377v11.514z"
            fill="#9DFF9B"
            stroke="#000"
            strokeWidth={0.82624}
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_203_4564"
              x1={26.7697}
              y1={0.999756}
              x2={26.7697}
              y2={20.2213}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#018752" />
            </linearGradient>
          </defs>
        </svg>
      );
    },
    homeBackground: (props?: SvgProps) => {
      return (
        <svg
          width={867}
          height={717}
          viewBox="0 0 867 717"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M657 39h-43v295H252V39h-45s4 223 0 257-8.619 42.181-18 68c-10.2 28.074-18.601 42.831-33 69-16.764 30.467-28.583 46.152-48 75C68.88 566.121 1 652 1 652v64h278V416h311v300h276v-64s-36.968-43.705-59-73c-28.712-38.177-44.222-60.16-69-101-10.98-18.097-16.984-28.352-27-47-12.561-23.387-20.629-36.162-30-61-9.563-25.349-13.015-40.37-18-67-3.191-17.046-6-44-6-44V39z"
            fill="url(#paint0_linear_20_49)"
            stroke="#000"
            strokeWidth={2}
          />
          <path
            d="M392.663 170L252 90v221l172.726-107h16.548L614 311V90l-172.726 94h-16.548l-32.063-14z"
            fill="url(#paint1_linear_20_49)"
            stroke="#000"
          />
          <path
            d="M633 640.736v-.09l-.016-.089L621 574.909V437h38v105.438l.006.056L670 640.792V713h-37v-72.264zm-12-54.689l10 54.78V713h-10V586.047z"
            fill="url(#paint2_linear_20_49)"
            stroke="#000"
            strokeWidth={2}
          />
          <path
            d="M238 641v-.091l.016-.089L250 575.409V438h-38v105.056l-.006.056L201 641.056V713h37v-72zm12-54.492l-10 54.583V713h10V586.508z"
            fill="url(#paint3_linear_20_49)"
            stroke="#000"
            strokeWidth={2}
          />
          <path
            d="M523.872 156.398L433.062 2v102.678l90.81 51.72z"
            fill="#6DE5FF"
            stroke="#000"
          />
          <path
            d="M431.561 2L340 155.637l91.561-50.959V2z"
            fill="url(#paint4_linear_20_49)"
            stroke="#000"
          />
          <path
            d="M341.501 171.99l12.758-4.944h154.603l17.262 4.183-92.687 57.804-91.936-57.043z"
            fill="#7A82ED"
            stroke="#000"
          />
          <path
            d="M432.687 316.5L340 173.891l92.687 57.804V316.5z"
            fill="url(#paint5_linear_20_49)"
            stroke="#000"
          />
          <path
            d="M528 172.75l-93.062 58.945v84.044L528 172.75z"
            fill="url(#paint6_linear_20_49)"
            stroke="#000"
          />
          <path
            d="M432.311 124.453V106.2L340 157.919l14.635 8.747 77.676-42.213z"
            fill="#FAE8C1"
            stroke="#000"
          />
          <path
            d="M523.497 157.919l-90.81-51.719v17.493l76.551 43.353 14.259-9.127z"
            fill="#B3F3B9"
            stroke="#000"
          />
          <path
            d="M354.259 167.046l77.677-42.593v92.031l-77.677-49.438z"
            fill="#232A4F"
            stroke="#000"
          />
          <path
            d="M432.687 216.484l75.8-49.058-75.8-42.973v92.031z"
            fill="#1288A2"
            stroke="#000"
          />
          <defs>
            <linearGradient
              id="paint0_linear_20_49"
              x1={434}
              y1={258}
              x2={433.5}
              y2={716}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F4B0C7" />
              <stop offset={1} stopColor="#A4AAFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_20_49"
              x1={433}
              y1={90}
              x2={433}
              y2={311}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D19FCF" />
              <stop offset={1} stopColor="#2C356A" />
              <stop offset={1} stopColor="#1288A2" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_20_49"
              x1={645.5}
              y1={436}
              x2={645.5}
              y2={714}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7182E7" />
              <stop offset={1} stopColor="#2E86B6" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_20_49"
              x1={225.5}
              y1={437}
              x2={225.5}
              y2={714}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7A82ED" />
              <stop offset={1} stopColor="#1288A2" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_20_49"
              x1={385.78}
              y1={2}
              x2={385.78}
              y2={155.637}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F4B1C5" />
              <stop offset={0.994792} stopColor="#6E6EEC" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_20_49"
              x1={386.343}
              y1={173.891}
              x2={386.343}
              y2={316.5}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FAE7C5" />
              <stop offset={1} stopColor="#FF00E6" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              id="paint6_linear_20_49"
              x1={481.469}
              y1={172.75}
              x2={481.469}
              y2={315.739}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9DB9E2" />
              <stop offset={1} stopColor="#0086A4" />
            </linearGradient>
          </defs>
        </svg>
      );
    },
    // =================================================================NAVBAR ICONS =================================================================
    homeIcon: (props?: SvgProps) => {
      return (
        <svg
          width={20}
          height={19}
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.094 9.35L9.95.67l9.96 8.676-1.313 1.508-1.593-1.388V16a3 3 0 01-2.824 2.995l-.176.005H6.004a3 3 0 01-2.995-2.824L3.005 16V9.45l-1.59 1.4L.095 9.35H.094zm9.864-6.021l5.046 4.396V16l-.007.117a1 1 0 01-.993.883h-3v-4h-2v4h-3l-.117-.007A1 1 0 015.005 16V7.69l4.953-4.361z"
            fill={"currentColor"}
          />
        </svg>
      );
    },
    storeIcon: (props?: SvgProps) => {
      return (
        <svg
          width={20}
          height={17}
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 7c-1.103 0-2-.897-2-2h-2c0 1.103-.897 2-2 2s-2-.897-2-2H6c0 1.103-.897 2-2 2s-2-.897-2-2v-.241L4.113 2h11.774L18 4.759V5c0 1.103-.897 2-2 2zm0 8h-3v-4H7v4H4V9a3.99 3.99 0 003-1.357 3.99 3.99 0 004.646 1.002A3.99 3.99 0 0013 7.643 3.99 3.99 0 0016 9v6zm-7 0h2v-2H9v2zM20 5v-.919L16.873 0H3.127L0 4.081V5c0 1.475.811 2.75 2 3.443V15H0v2h20v-2h-2V8.443C19.189 7.75 20 6.475 20 5z"
            fill="currentColor"
          />
        </svg>
      );
    },
    rewardsIcon: (props?: SvgProps) => {
      return (
        <svg
          width={16}
          height={20}
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.002 18H3v-4h10l.002 4zM8 2c2.599 0 4.817 1.474 5.64 3.505-1.871-.563-4.026-.329-5.64.683-1.615-1.012-3.769-1.244-5.639-.686C3.186 3.473 5.402 2 8 2zm-1 9.423L2.824 7.46c1.372-.451 2.994-.278 4.176.483v3.48zm2-3.48c1.18-.76 2.8-.935 4.174-.48L9 11.423v-3.48zm7-.406l-.008-.44C15.923 3.184 12.339 0 8 0S.077 3.184.008 7.097L0 7.537 4.705 12H1v6c0 1.103.898 2 2 2h10c1.103 0 2-.897 2-2v-6h-3.705L16 7.537z"
            fill="currentColor"
          />
        </svg>
      );
    },
    customersIcon: (props?: SvgProps) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-7c0 1.103.897 2 2 2s2-.897 2-2h2c0 2.206-1.794 4-4 4s-4-1.794-4-4h2zm5.5-5a1.5 1.5 0 10-.079 2.998A1.5 1.5 0 0013.5 6zm-7 0a1.5 1.5 0 11.078 2.999A1.5 1.5 0 016.5 6z"
            fill="currentColor"
          />
        </svg>
      );
    },
    analyticsIcon: (props?: SvgProps) => {
      return (
        <svg
          width={18}
          height={16}
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12 0v2.286H8v4.571H6V4.571H0V16h18V0h-6zM4 13.714H2V6.857h2v6.857zm4 0H6V9.143h2v4.571zm4 0h-2V4.571h2v9.143zm4 0h-2V2.286h2v11.428z"
            fill="currentColor"
          />
        </svg>
      );
    },
    arrowRightIcon: (props?: SvgProps) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M13.476 9.167l-4.47-4.47 1.178-1.179L16.666 10l-6.482 6.482-1.178-1.179 4.47-4.47H3.333V9.167h10.143z"
            fill="#fff"
          />
        </svg>
      );
    },
    twitterIcon: (props?: SvgProps) => {
      return (
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M2.966 3.801l7.41 10.154L2.92 22.21h1.679l6.528-7.228 5.275 7.228h5.712l-7.828-10.725 6.941-7.684h-1.678l-6.012 6.657L8.678 3.8H2.966zm2.468 1.267h2.624l11.586 15.875H17.02L5.434 5.068z"
            fill="#060606"
          />
        </svg>
      );
    },
    mediumIcon: (props?: SvgProps) => {
      return (
        <svg
          width={44}
          height={25}
          viewBox="0 0 44 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M24.71 12.335c0 6.613-5.323 12-11.936 12-6.613 0-11.935-5.387-11.935-12s5.322-12 11.935-12 11.936 5.387 11.936 12zm13.097 0c0 6.226-2.678 11.29-5.968 11.29s-5.968-5.064-5.968-11.29c0-6.226 2.678-11.29 5.968-11.29s5.968 5.064 5.968 11.29zm5.354 0c0 5.58-.935 10.13-2.096 10.13-1.162 0-2.097-4.55-2.097-10.13 0-5.58.935-10.129 2.097-10.129 1.161 0 2.096 4.549 2.096 10.13z"
            fill="#000"
          />
        </svg>
      );
    },
    githubIcon: (props?: SvgProps) => {
      return (
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M6.046 18.988c-.3-.2-.559-.456-.86-.816a50.59 50.59 0 01-.466-.579c-.463-.575-.755-.841-1.057-.95a1 1 0 11.675-1.882c.753.27 1.262.735 1.948 1.588-.094-.117.34.427.433.539.19.227.33.365.439.438.205.137.588.196 1.15.14.024-.382.095-.753.203-1.096-2.968-.725-4.648-2.64-4.648-6.396 0-1.238.369-2.355 1.058-3.291-.218-.894-.185-1.975.302-3.192a1 1 0 01.629-.583c.082-.024.128-.034.208-.047.803-.123 1.937.17 3.416 1.097a11.731 11.731 0 012.687-.308c.912 0 1.818.103 2.684.307 1.476-.932 2.613-1.226 3.422-1.096.085.014.157.032.218.051a1 1 0 01.616.58c.486 1.215.52 2.296.302 3.19.69.936 1.058 2.045 1.058 3.292 0 3.758-1.674 5.666-4.643 6.393.125.415.191.878.191 1.38 0 .664-.002 1.299-.007 2.01l-.005.706a1 1 0 01-.019 1.957c-1.139.228-1.983-.532-1.983-1.524l.002-.447.005-.705c.005-.707.007-1.338.007-1.997 0-.698-.183-1.152-.426-1.361-.66-.57-.326-1.654.542-1.751 2.966-.334 4.336-1.483 4.336-4.66 0-.955-.312-1.745-.913-2.405a1 1 0 01-.19-1.044c.166-.415.237-.957.096-1.614l-.01.002c-.492.14-1.11.44-1.858.95a1 1 0 01-.833.135 9.626 9.626 0 00-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 01-.83-.133c-.752-.507-1.374-.807-1.869-.948-.143.654-.072 1.195.093 1.608a1 1 0 01-.19 1.044c-.596.656-.912 1.458-.912 2.404 0 3.172 1.37 4.33 4.322 4.66.865.098 1.201 1.178.544 1.749-.192.167-.429.732-.429 1.364v3.149c0 .986-.835 1.726-1.96 1.529a1 1 0 01-.04-1.963v-.99c-.91.062-1.662-.087-2.254-.484z"
            fill="#000"
          />
        </svg>
      );
    },
    discordIcon: (props?: SvgProps) => {
      return (
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M8.682 14.18c-1.04 0-1.889-.944-1.889-2.1 0-1.157.828-2.102 1.89-2.102 1.05 0 1.91.945 1.888 2.101 0 1.157-.838 2.102-1.889 2.102zm6.974 0c-1.04 0-1.89-.944-1.89-2.1 0-1.157.828-2.102 1.89-2.102 1.05 0 1.91.945 1.889 2.101 0 1.157-.828 2.102-1.89 2.102zm-5.37-9.522l-.308-.563-.633.105a16.353 16.353 0 00-4.158 1.28l-.229.106-.141.209c-2.614 3.854-3.33 7.648-2.975 11.376l.039.406.33.24a16.909 16.909 0 005.078 2.543l.79.242 1.113-2.717c1.91.472 4.029.473 5.939 0l1.106 2.718.791-.243a16.822 16.822 0 005.08-2.544l.326-.238.04-.402c.437-4.32-.696-8.084-2.958-11.385l-.142-.207-.228-.104a16.575 16.575 0 00-4.154-1.28l-.617-.103-.315.541c-.087.151-.177.321-.262.494a15.878 15.878 0 00-3.264 0 14.12 14.12 0 00-.247-.474zm-3.41 12.287c.198.114.405.226.611.328l-.449 1.096a15.022 15.022 0 01-3.429-1.779c-.224-3.137.414-6.304 2.565-9.569a14.551 14.551 0 012.824-.913c.06.125.116.247.162.356l.273.643.691-.101a14.107 14.107 0 014.09 0l.69.1.272-.642c.048-.112.102-.234.16-.356.978.21 1.924.519 2.829.915 1.875 2.82 2.82 5.966 2.545 9.567a14.905 14.905 0 01-3.43 1.778l-.445-1.094c.206-.103.415-.215.613-.329.49-.282 1.017-.634 1.354-.97l-1.28-1.28c-.163.164-.523.42-.977.682-.445.256-.885.463-1.167.556-2.004.663-4.428.663-6.432 0-.282-.093-.722-.3-1.167-.556-.454-.261-.813-.518-.977-.682l-1.28 1.28c.337.336.864.688 1.354.97z"
            fill="#000"
          />
        </svg>
      );
    },
    footerethicon: (props?: SvgProps) => {
      return (
        <svg
          width={"130px"}
          height={"130px"}
          viewBox="0 0 83 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M41.962 23.734l12.894 21.122V31.114l-12.894-7.38z"
            fill="#04002F"
          />
          <path
            d="M54.856 44.856l12.979-21.122-12.98 7.38v13.742z"
            fill="#7DEAF9"
          />
          <path
            d="M41.962 23.734l12.894 7.38 12.979-7.38-12.894-7.38-12.98 7.38z"
            fill="#5F37FF"
          />
          <path
            d="M54.856 44.856l12.979-21.122m-12.98 21.122L41.963 23.734m12.894 21.122V31.114m12.979-7.38l-12.98 7.38m12.98-7.38l-12.894-7.38-12.98 7.38m0 0l12.895 7.38"
            stroke="#000"
            strokeWidth={0.169658}
          />
          <g
            style={{
              mixBlendMode: "multiply",
            }}
            filter="url(#filter0_f_584_3967)"
          >
            <path
              d="M53.668 30.435l13.234-7.804-20.105-1.866-4.835 2.884 11.706 6.786z"
              fill="#000"
              fillOpacity={0.5}
            />
          </g>
          <path
            d="M42.044 22.038l12.81 7.464V1l-12.81 21.038z"
            fill="#393562"
          />
          <path
            d="M67.832 22.038L54.853 1v28.502l12.979-7.464z"
            fill="#53CADB"
          />
          <path
            d="M54.853 1l12.979 21.038-12.979 7.464m0-28.502l-12.81 21.038 12.81 7.464m0-28.502v28.502"
            stroke="#000"
            strokeWidth={0.169658}
          />
          <g
            style={{
              mixBlendMode: "multiply",
            }}
            filter="url(#filter1_f_584_3967)"
          >
            <path
              d="M38.135 39.403l7.043 9.924-21.77-2.241-15.365-8.964L1 27.878l21.449 2.24 15.686 9.285z"
              fill="#000"
              fillOpacity={0.5}
            />
          </g>
          <defs>
            <filter
              id="filter0_f_584_3967"
              x={41.6226}
              y={20.4253}
              width={25.6186}
              height={10.3495}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={0.169658}
                result="effect1_foregroundBlur_584_3967"
              />
            </filter>
            <filter
              id="filter1_f_584_3967"
              x={0.359745}
              y={27.2377}
              width={45.4582}
              height={22.7288}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={0.320128}
                result="effect1_foregroundBlur_584_3967"
              />
            </filter>
          </defs>
        </svg>
      );
    },
    arrowRightIcon2: (props?: SvgProps) => {
      return (
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M13.477 9.166l-4.47-4.47 1.178-1.178 6.482 6.481-6.482 6.482-1.178-1.178 4.47-4.47H3.334V9.166h10.143z"
            fill="#060606"
          />
        </svg>
      );
    },
    box1: (props?: SvgProps) => {
      return (
        <svg
          width={96}
          height={96}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M48.028 48.464L.647 35.775l12.692 47.37 47.1 11.636-12.41-46.317z"
            fill="#000"
          />
          <path
            d="M82.717 13.785l-34.689 34.68 12.41 46.316 34.69-34.68-12.411-46.316zM82.717 13.785L35.336 1.095.647 35.775l47.381 12.69 34.689-34.68z"
            fill="#000"
          />
          <path
            d="M60.438 94.78l34.69-34.679-12.411-46.316M60.438 94.78L13.34 83.144.648 35.775m59.791 59.006l-12.41-46.317m0 0l34.689-34.68m-34.689 34.68L.647 35.775m82.07-21.99L35.336 1.095.647 35.775"
            stroke="#fff"
            strokeWidth={1.08978}
          />
        </svg>
      );
    },
    cubeBoxStyle: (props?: SvgProps) => {
      return (
        <svg
          width={234}
          height={274}
          viewBox="0 0 234 274"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          {...props}
        >
          <path fill="url(#pattern0)" d="M0 0H234V273.5H0z" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#image0_728_4959"
                transform="scale(.00214 .00183)"
              />
            </pattern>
            <image
              id="image0_728_4959"
              width={468}
              height={547}
              xlinkHref="data:image/png;base64,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+2zNiVhyrQJ1e1LFWl6wzTDZgwWVMRQcqY4sqr7Nbrz2hSnNj/z6krqhvj4oqsoM/yLdJyLSXmsP4lpjQkSiFkty7d28YJthcgYLKmM4xq9NYS1S1VRbHpmEzr8Ur/7u05fcNtzPkqvzIpZbksD2e/7FC7YZJl+woDKGhBuVhhbVnfeeheAh66WPrLm4EQzDGAreh8oYkrteqP6scsT1mfhHl8pGmvHAwD7VZgy3TzXUYkfkqNXHYsowxoQFlTEsd/2r+rNoc30mNg5FVRlCVP273LR0m1O4DGNQWFAZQyMj1bbxF6nWDhGp9m8oEtlg7TdgGMaQsKAyhodEdbxHqtEOG/w7XbACHKEyjEHhpiTGNDxy8aFPo3L8df/SSE20w4qoT93+zd9cuAgMwxgSjlAZ03DXPwYi1fhHl+njIVIN7HTD1+iFKqLVeJ8GNYG1YBjGsHCEypiOM3WkJtZuQ//mYkSaHeh/sRixftWHhNKoK2jUVX3t19ec3wyGYQwLCypjSh45X6R/J5k7/ZsU6dzQTo+4udG/oQSRI3a5Y1TXlUYgvv4rz57fCIZhTAMLKmNazOaoRAIabXIhtMuN0MseBHcUQU+gOZlU1iSV5FqP37L9wcZF7K3LMCaFBZUxNUYX1WizCxERhQY2eBF93YlEn7UHenJtPIn1jrC6hgWUYc4cWFAZ02OkmqouotDwRi/CO4oR/KcXCb/Fhzi26yIKVbXk+gd/v2g7GIY5I2FBZc4ICiWqetCC2H6XENFShF8sRfSwQ9RBsV6PqY0iPl1PYspRKMOMD1hQmTOGfIlqTESf0Z3i9jLdSkQdVGkWtzXxRHw9EkWNvKSbYcYnLKjMGUUuRDXZbkdsY5kUz8hLQkD7LD16TFmrQNkeToTWigi0GQzDjHtYUJkzjrE2KukBC+JCQOOvCAF9oUIKaCKGl5SEugaKsv3j62ay/R/DMP8GCypzRpJJpEoCmmzyIL6hHPHtXiReK9L1hL4+EVe2a4plTZ+OlziNyzBMKlhQmTOWkSLV5CteJJuFiP5LRKB7i/REr7U5mcBaHfp2BdraD7OAMgyTISyozBnN8Uj1oZeg7/cgQUK6tRRJn7UHcUtjIplYn7SABLQZDMMwY4AFlTnjkaJqiz+oJ/X1SGrrxEPr7/nHVK6DMgzDMEymPFbf5AXDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMOOO/w/ZMVY9J+cKcgAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      );
    },
  };
}
