type IconProps = {
  className?: string;
};

const baseIconClasses = "inline-block";

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${baseIconClasses} ${className ?? ""}`}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        className="fill-none stroke-current"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4.2" className="fill-none stroke-current" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" className="fill-current" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${baseIconClasses} ${className ?? ""}`}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" className="fill-none stroke-current" strokeWidth="1.6" />
      <path
        d="M8.2 10.2H6.1V17h2.1v-6.8ZM7.1 9.1a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm3.3 7.9H12.5V13.4c0-.9.6-1.5 1.4-1.5.8 0 1.3.5 1.3 1.5V17h2.1v-4.1c0-2-1.1-3.1-2.8-3.1-1.2 0-1.9.6-2.3 1.2h-.1V10.2H10.4V17Z"
        className="fill-current"
      />
    </svg>
  );
}

export function AppStoreIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${baseIconClasses} ${className ?? ""}`}
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        className="fill-none stroke-current"
        strokeWidth="1.6"
      />
      <path
        d="M9.1 8.2 7.3 11.4a.8.8 0 0 0 .3 1.1.8.8 0 0 0 1.1-.3l1.2-2.1m1.3-2.3L13.4 11m1.2-2.1 1.8 3.2a.8.8 0 0 1-.3 1.1.8.8 0 0 1-1.1-.3l-.7-1.1M8.5 15.5h3.1m3.2 0h.4"
        className="fill-none stroke-current"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GooglePlayIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${baseIconClasses} ${className ?? ""}`}
    >
      <path
        d="M4.3 4.5a1 1 0 0 0-.3.8v13.4a1 1 0 0 0 1.5.8l9.1-5.3 2.9-1.7a.9.9 0 0 0 0-1.6l-2.9-1.7-9.1-5.3a1 1 0 0 0-1.2.1Z"
        className="fill-none stroke-current"
        strokeWidth="1.6"
      />
      <path
        d="m11.2 11.2-5-5 7.4 4.3-2.4.7Zm2.4.7-2.4.7 7.4 4.3-5-5Z"
        className="fill-current"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${baseIconClasses} ${className ?? ""}`}
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        className="fill-none stroke-current"
        strokeWidth="1.6"
      />
      <path
        d="M5 7.5 12 12.3 19 7.5"
        className="fill-none stroke-current"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${baseIconClasses} ${className ?? ""}`}
    >
      <path
        d="M9.1 4.1 6.8 4.5a1.2 1.2 0 0 0-1 1.2c.2 5.8 3.2 8.8 9 9a1.2 1.2 0 0 0 1.2-1l.4-2.3a.9.9 0 0 0-.7-1.1l-2.4-.5a.9.9 0 0 0-1 .4l-.7 1.2a5.8 5.8 0 0 1-2.9-2.9l1.2-.7a.9.9 0 0 0 .4-1l-.5-2.4a.9.9 0 0 0-1.1-.7Z"
        className="fill-none stroke-current"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`${baseIconClasses} ${className ?? ""}`}
    >
      <path
        d="M12 4.5a5 5 0 0 0-5 5c0 3.5 3.3 7.3 4.6 8.8a.6.6 0 0 0 .8 0c1.3-1.5 4.6-5.3 4.6-8.8a5 5 0 0 0-5-5Z"
        className="fill-none stroke-current"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="9.5"
        r="1.8"
        className="fill-none stroke-current"
        strokeWidth="1.6"
      />
    </svg>
  );
}

