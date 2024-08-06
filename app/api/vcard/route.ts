import { type NextRequest } from "next/server";
import PersonalInfo from "@/data/PersonalInfo";
import { generateVCard } from "@/lib/vCard";

export async function GET(request: NextRequest) {
	const vCardContent = generateVCard();
	return new Response(vCardContent, {
		headers: {
			"Content-Type": "text/vcard",
			"Content-Disposition": `attachment; filename="${PersonalInfo.formattedName}.vcf"`,
		},
	});
}
