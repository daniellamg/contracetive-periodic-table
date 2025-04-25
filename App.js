import React from 'react';

function Card({ children, className, onClick }) {
  return (
    <div onClick={onClick} className={`bg-white border rounded shadow ${className}`}>
      {children}
    </div>
  );
}

const contraceptives = [
  { symbol: "OCP", name: "Oral Contraceptive Pill", group: "Hormonal (Systemic)", color: "bg-orange-300", duration: "Daily", stiProtection: false, effectiveness: "91-99%", contraindications: "Blood clots, smoking over age 35, certain cancers", description: "Daily pill that prevents ovulation using synthetic hormones. Common brands: Yasmin, Alesse, Microgynon, Yaz." },
  { symbol: "Patch", name: "Contraceptive Patch", group: "Hormonal (Systemic)", color: "bg-orange-300", duration: "Weekly", stiProtection: false, effectiveness: "91-99%", contraindications: "Similar to OCP: clot risks, liver disease, smoking over 35", description: "Worn on skin, delivers hormones through the skin to prevent pregnancy. Example: Xulane, Evra." },
  { symbol: "Ring", name: "Vaginal Ring", group: "Hormonal (Systemic)", color: "bg-orange-300", duration: "Monthly", stiProtection: false, effectiveness: "91-99%", contraindications: "Clot history, uncontrolled hypertension, liver tumors", description: "Inserted into the vagina monthly to release hormones. Common brands: NuvaRing, Annovera." },
  { symbol: "Shot", name: "Depo Shot", group: "Hormonal (Systemic)", color: "bg-orange-300", duration: "Quarterly", stiProtection: false, effectiveness: "94-99%", contraindications: "Osteoporosis, liver disease, breast cancer", description: "Injection every 3 months that prevents ovulation. Brand: Depo-Provera." },
  { symbol: "LNG-IUS", name: "Hormonal IUD", group: "Hormonal (Local)", color: "bg-blue-200", duration: "Years", stiProtection: false, effectiveness: "99%", contraindications: "Pelvic infections, uterine abnormalities, liver tumors", description: "Small T-shaped device inserted into the uterus that releases hormones locally. Brands: Mirena, Kyleena, Skyla, Liletta." },
  { symbol: "Implant", name: "Contraceptive Implant", group: "Hormonal (Local)", color: "bg-blue-200", duration: "Years", stiProtection: false, effectiveness: "99%", contraindications: "Unexplained vaginal bleeding, liver tumors, breast cancer", description: "Rod placed under the skin of the arm that releases hormones over years. Brand: Nexplanon (previously Implanon)." },
  { symbol: "Condom", name: "Male Condom", group: "Barrier", color: "bg-purple-300", duration: "Per Use", stiProtection: true, effectiveness: "82-98%", contraindications: "Latex allergy (use polyurethane or nitrile)", description: "Prevents sperm from entering the uterus; also protects against STIs. Brands: Trojan, Durex, Lifestyles." },
  { symbol: "FemCon", name: "Female Condom", group: "Barrier", color: "bg-purple-300", duration: "Per Use", stiProtection: true, effectiveness: "79-95%", contraindications: "Polyurethane sensitivity", description: "Inserted into the vagina to prevent sperm from reaching the egg. Brand: FC2 Female Condom." },
  { symbol: "Diaph", name: "Diaphragm", group: "Barrier", color: "bg-purple-300", duration: "Per Use", stiProtection: false, effectiveness: "88-94%", contraindications: "Recurrent UTIs, anatomical uterine issues", description: "Dome-shaped device that covers the cervix and blocks sperm. Brands: Caya, Milex." },
  { symbol: "Sponge", name: "Contraceptive Sponge", group: "Barrier", color: "bg-purple-300", duration: "Per Use", stiProtection: false, effectiveness: "76-88%", contraindications: "Allergy to spermicide, vaginal infections", description: "Contains spermicide and blocks sperm from entering the uterus. Brand: Today Sponge." },
  { symbol: "Vasec", name: "Vasectomy", group: "Permanent", color: "bg-red-300", duration: "Permanent", stiProtection: false, effectiveness: "99.9%", contraindications: "None if fully informed and consented", description: "Surgical procedure for men that cuts sperm supply. Permanent and highly effective." },
  { symbol: "Tubal", name: "Tubal Ligation", group: "Permanent", color: "bg-red-300", duration: "Permanent", stiProtection: false, effectiveness: "99.5%", contraindications: "Pelvic infections, surgical risks", description: "Surgical procedure for women to block or cut fallopian tubes. Permanent contraception." },
  { symbol: "FABM", name: "Fertility Awareness", group: "Behavioral", color: "bg-green-300", duration: "Daily", stiProtection: false, effectiveness: "76-88%", contraindications: "Irregular cycles, inconsistent tracking", description: "Tracking cycle to avoid intercourse during fertile days. Methods include: Standard Days, BBT, Billings Ovulation Method." },
  { symbol: "WD", name: "Withdrawal", group: "Behavioral", color: "bg-green-300", duration: "Per Use", stiProtection: false, effectiveness: "78%", contraindications: "Lack of control or experience", description: "Pulling out before ejaculation to avoid pregnancy. Least effective when not used correctly." },
  { symbol: "PlanB", name: "Plan B (Levonorgestrel)", group: "Emergency", color: "bg-pink-500", duration: "Single Use", stiProtection: false, effectiveness: "87-95%", contraindications: "Known pregnancy, allergy to ingredients", description: "Taken within 72 hours after unprotected sex to prevent ovulation. Brand: Plan B One-Step, Take Action." },
  { symbol: "Ella", name: "Ulipristal Acetate", group: "Emergency", color: "bg-pink-500", duration: "Single Use", stiProtection: false, effectiveness: "95%", contraindications: "Known pregnancy, severe asthma treated with glucocorticoids", description: "Emergency contraceptive effective up to 5 days after intercourse. Brand: Ella." },
  { symbol: "Cu-IUD", name: "Copper IUD", group: "Emergency", color: "bg-pink-500", duration: "Years", stiProtection: false, effectiveness: "99.9%", contraindications: "Wilson’s disease, uterine abnormalities, active pelvic infection", description: "Inserted within 5 days of unprotected sex; non-hormonal. Brand: Paragard." }
];

// Dummy export
function PeriodicTableOfContraceptives() { return <div>Coming soon</div>; }

export default PeriodicTableOfContraceptives;
