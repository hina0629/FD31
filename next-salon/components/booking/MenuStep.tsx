import type { Menu } from "@/types/menu"
import ui from "@/components/UI"
import SelectableCard from "./SelectableCard"

type MenuStepProps = {
  menus: Menu[]
  selectedMenuId: string | null
  onSelect: (menuId: string) => void
}

export default function MenuStep({ menus, selectedMenuId, onSelect }: MenuStepProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className={ui.title}>STEP 1: メニューを選ぶ</h3>
      {menus.map((menu) => (
        <SelectableCard
          key={menu.id}
          selected={menu.id === selectedMenuId}
          onClick={() => onSelect(menu.id)}
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-medium text-slate-950 group-aria-pressed:text-white">{menu.name}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600 group-aria-pressed:text-slate-300">
                {menu.description}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-lg font-semibold text-slate-950 group-aria-pressed:text-white">
                ¥{menu.price.toLocaleString("ja-JP")}
              </p>
              <p className="text-xs text-slate-500 group-aria-pressed:text-slate-300">
                {menu.durationMinutes} min
              </p>
            </div>
          </div>
        </SelectableCard>
      ))}
    </div>
  )
}