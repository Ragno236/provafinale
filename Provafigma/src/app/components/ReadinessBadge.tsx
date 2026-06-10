import { getReadinessTier } from "../utils/readinessTier";

interface ReadinessBadgeProps {
  value: number;
}

export function ReadinessBadge({ value }: ReadinessBadgeProps) {
  const tier = getReadinessTier(value);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "8px 0"
    }}>
      {/* Tier Label Pill */}
      <div style={{
        display: "inline-flex",
        backgroundColor: "#E8FF5A",
        color: "#0A0A0A",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        letterSpacing: "0.03em",
        padding: "6px 16px",
        borderRadius: "100px",
        textAlign: "center"
      }}>
        {tier.label}
      </div>

      {/* Sublabel */}
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: "13px",
        color: "#8E8E89",
        lineHeight: 1.5,
        marginTop: "6px",
        textAlign: "center",
        maxWidth: "280px"
      }}>
        {tier.sublabel}
      </div>

      {/* Easter Egg Line */}
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: "11px",
        color: "#C8C7C3",
        fontStyle: "italic",
        marginTop: "4px",
        textAlign: "center",
        maxWidth: "280px"
      }}>
        {tier.easterEgg}
      </div>
    </div>
  );
}
