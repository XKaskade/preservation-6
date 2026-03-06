"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/schemas";

const CONTACT_EMAIL = "owner@aetaviation.com";

const contactMethodLabels: Record<string, string> = {
  phone: "Phone Number",
  email: "Email Address",
  text: "Phone Number",
};

const serviceTierLabels: Record<string, string> = {
  ramp_turnaround: "Ramp Turnaround",
  a_check: "A-Check Decontamination",
  c_check: "C-Check Preservation",
  pneumatic_boot: "Pneumatic Boot Restoration",
};

const serviceTierOptions = [
  { value: "ramp_turnaround", label: "Ramp Turnaround" },
  { value: "a_check", label: "A-Check Decontamination" },
  { value: "c_check", label: "C-Check Preservation" },
  { value: "pneumatic_boot", label: "Pneumatic Boot Restoration" },
];

const hangarLabels: Record<string, string> = {
  CRG: "Craig Airport (CRG)",
  KVQQ: "Cecil Spaceport (KVQQ)",
  JAX: "Jacksonville International (JAX)",
  private: "Private Field",
};

const hangarOptions = [
  { value: "CRG", label: "Craig Airport (CRG)" },
  { value: "KVQQ", label: "Cecil Spaceport (KVQQ)" },
  { value: "JAX", label: "Jacksonville International (JAX)" },
  { value: "private", label: "Private Field" },
];

export default function FlightDeck() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      contactMethod: "phone",
    },
  });

  const contactMethod = watch("contactMethod");

  const onSubmit = (data: QuoteFormData) => {
    const tierLabel = serviceTierLabels[data.serviceTier] || data.serviceTier;
    const locationLabel = hangarLabels[data.hangarLocation] || data.hangarLocation;

    const subject = `Preservation Assessment Request - ${data.aircraftMakeModel} ${data.tailNumber}`;

    const body = [
      `PRESERVATION ASSESSMENT REQUEST`,
      ``,
      `Client Name: ${data.clientName}`,
      `Preferred Contact: ${data.contactMethod}`,
      `Contact Info: ${data.contactInfo}`,
      ``,
      `Aircraft Make/Model: ${data.aircraftMakeModel}`,
      `Tail Number: ${data.tailNumber}`,
      `Service Tier: ${tierLabel}`,
      `Hangar Location: ${locationLabel}`,
      ...(data.notes ? [``, `Additional Notes:`, data.notes] : []),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-800 border border-slate-700/50 rounded-lg p-8 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Client Name */}
        <div>
          <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
            Client Name
          </label>
          <input
            {...register("clientName")}
            type="text"
            className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-600"
            placeholder="Full name"
          />
          {errors.clientName && (
            <p className="text-red-400 text-xs mt-1">{errors.clientName.message}</p>
          )}
        </div>

        {/* Contact Method */}
        <div>
          <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
            Contact Method
          </label>
          <select
            {...register("contactMethod")}
            className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
          >
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="text">Text</option>
          </select>
          {errors.contactMethod && (
            <p className="text-red-400 text-xs mt-1">{errors.contactMethod.message}</p>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-6">
        <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
          {contactMethodLabels[contactMethod] || "Contact Info"}
        </label>
        <input
          {...register("contactInfo")}
          type={contactMethod === "email" ? "email" : "tel"}
          className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-600"
          placeholder={contactMethod === "email" ? "you@example.com" : "(904) 555-0100"}
        />
        {errors.contactInfo && (
          <p className="text-red-400 text-xs mt-1">{errors.contactInfo.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Aircraft Make/Model */}
        <div>
          <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
            Aircraft Make / Model
          </label>
          <input
            {...register("aircraftMakeModel")}
            type="text"
            className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-600"
            placeholder="e.g., Cessna 172S, Gulfstream IV-SP"
          />
          {errors.aircraftMakeModel && (
            <p className="text-red-400 text-xs mt-1">{errors.aircraftMakeModel.message}</p>
          )}
        </div>

        {/* Tail Number */}
        <div>
          <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
            Tail Number
          </label>
          <input
            {...register("tailNumber")}
            type="text"
            className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-600"
            placeholder="e.g., N12345"
          />
          {errors.tailNumber && (
            <p className="text-red-400 text-xs mt-1">{errors.tailNumber.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Service Tier */}
        <div>
          <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
            Service Tier
          </label>
          <select
            {...register("serviceTier")}
            className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
          >
            <option value="">Select a tier</option>
            {serviceTierOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.serviceTier && (
            <p className="text-red-400 text-xs mt-1">{errors.serviceTier.message}</p>
          )}
        </div>

        {/* Hangar Location */}
        <div>
          <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
            Hangar Location
          </label>
          <select
            {...register("hangarLocation")}
            className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
          >
            <option value="">Select location</option>
            {hangarOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.hangarLocation && (
            <p className="text-red-400 text-xs mt-1">{errors.hangarLocation.message}</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div className="mt-6">
        <label className="text-slate-300 text-sm font-heading uppercase tracking-wider mb-2 block">
          Additional Notes
        </label>
        <textarea
          {...register("notes")}
          className="w-full bg-slate-950 border border-slate-700/50 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-600 h-32 resize-none"
          placeholder="Any additional details about your aircraft or service needs..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded font-heading font-semibold uppercase text-sm tracking-wide transition-colors"
      >
        Submit Assessment Request
      </button>
    </form>
  );
}
