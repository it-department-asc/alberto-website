import { NextResponse } from "next/server";
import { branchData } from "@/lib/data/branches";
import type { Brand } from "@/lib/types/branch";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Get filter parameters
  const search = searchParams.get("search")?.toLowerCase() || "";
  const brand = searchParams.get("brand");
  const lessor = searchParams.get("lessor");
  const region = searchParams.get("region");

  let filteredBranches = [...branchData];

  // Apply search filter
  if (search) {
    filteredBranches = filteredBranches.filter(
      (branch) =>
        branch.mallName.toLowerCase().includes(search) ||
        branch.city.toLowerCase().includes(search) ||
        branch.province.toLowerCase().includes(search) ||
        branch.branchCode.toLowerCase().includes(search) ||
        branch.storeId.toLowerCase().includes(search)
    );
  }

  // Apply brand filter
  if (brand && brand !== "ALL") {
    filteredBranches = filteredBranches.filter((branch) =>
      branch.brands.includes(brand as Brand)
    );
  }

  // Apply lessor filter
  if (lessor && lessor !== "ALL") {
    filteredBranches = filteredBranches.filter(
      (branch) => branch.lessor === lessor
    );
  }

  // Apply region filter
  if (region && region !== "ALL") {
    filteredBranches = filteredBranches.filter(
      (branch) => branch.region === region
    );
  }

  return NextResponse.json({
    branches: filteredBranches,
    total: filteredBranches.length,
    filters: {
      search,
      brand,
      lessor,
      region,
    },
  });
}
