import naruko_hstk from "@/data/members/hoshitsuki-naruko.json"
import zhenyuan from "@/data/members/zhenyuan.json"
import natsukawa_toyuan from "@/data/members/natsukawa-taoyuan.json"

export default function Member(id: string) {
  switch (id) {
    case "hoshitsuki-naruko":
      return naruko_hstk
    case "zhenyuan":
      return zhenyuan
    case "natsukawa-taoyuan":
      return natsukawa_toyuan
    default:
      break
  }
}
