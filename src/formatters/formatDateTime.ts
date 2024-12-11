const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
});

// Functions
export const formatDateTime = (datetime: string) => {
  // Return a placeholder if the datetime is null or invalid.
  // Note: isNaN(Date.parse(datetime)) is fragile and should be replaced with a better date validation library.
  if (typeof datetime !== "string" || isNaN(Date.parse(datetime))) {
    return "--";
  }

  return dateTimeFormatter.format(new Date(datetime));
};
