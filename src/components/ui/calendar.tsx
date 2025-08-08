import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "./utils"
import { Button, buttonVariants } from "./button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-6 [--cell-size:2.5rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent rounded-lg shadow-sm border",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit mx-auto", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-6 md:flex-row md:gap-8",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-6", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-2 px-2",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-2 hover:bg-accent hover:text-accent-foreground aria-disabled:opacity-50 transition-colors duration-200",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-2 hover:bg-accent hover:text-accent-foreground aria-disabled:opacity-50 transition-colors duration-200",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size] mb-2",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-[--cell-size] w-full items-center justify-center gap-2 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border mx-1",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "bg-popover absolute inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-semibold text-base",
          captionLayout === "label"
            ? "text-base"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-3 pr-2 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse space-y-1",
        weekdays: cn("flex mb-2", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-medium h-10 flex items-center justify-center",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full gap-1 mb-1", defaultClassNames.week),
        week_number_header: cn(
          "w-[--cell-size] select-none mr-2",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem] mr-2 flex items-center justify-center",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative flex-1 select-none p-1 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "bg-accent rounded-l-md",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground opacity-60",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-40",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn("p-2", className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-5", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-5", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-5", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-[--cell-size] items-center justify-center text-center mr-2">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-[--cell-size] w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 m-0.5",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }