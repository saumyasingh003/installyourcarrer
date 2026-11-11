// Shared enquiry shape + validation, used by the course enquiry form (client) and
// the /api/enquiries route handler (server) so both apply the same rules.

export interface Enquiry {
  name: string;
  mobile: string;
  email: string;
  course: string;
  program: string;
  qualification: string;
  location: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

export const QUALIFICATIONS = [
  "Class 12 (appearing)",
  "Class 12 (passed)",
  "Diploma",
  "Graduate",
  "Post Graduate",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Indian mobile: 10 digits starting 6-9, optional +91 / 0 prefix.
const MOBILE_RE = /^(?:\+?91|0)?[6-9]\d{9}$/;

const LIMITS: Record<keyof Enquiry, number> = {
  name: 100,
  mobile: 15,
  email: 150,
  course: 60,
  program: 150,
  qualification: 60,
  location: 100,
  message: 1000,
};

export function normaliseEnquiry(input: Record<string, unknown>): Enquiry {
  const s = (k: keyof Enquiry) => String(input[k] ?? "").trim().slice(0, LIMITS[k]);
  return {
    name: s("name"),
    mobile: s("mobile").replace(/[\s-]/g, ""),
    email: s("email").toLowerCase(),
    course: s("course"),
    program: s("program"),
    qualification: s("qualification"),
    location: s("location"),
    message: s("message"),
  };
}

export function validateEnquiry(e: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (e.name.length < 2) errors.name = "Please enter your full name.";
  if (!e.mobile) errors.mobile = "Please enter your mobile number.";
  else if (!MOBILE_RE.test(e.mobile)) errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (!e.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(e.email)) errors.email = "Enter a valid email address.";
  if (!e.course) errors.course = "Course is missing.";
  if (!e.qualification) errors.qualification = "Please select your current qualification.";
  return errors;
}
