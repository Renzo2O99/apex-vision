export function getLocaleCode(locale: string) {
  const localeMap: Record<string, string> = {
    'es': 'es-ES',
    'en': 'en-US'
  };
  return localeMap[locale] || localeMap['es'];
}

export function groupBy<T, K extends keyof any>(
  array: T[],
  getKey: (item: T) => K
): Record<K, T[]> {
  return array.reduce((acc, item) => {
    const key = getKey(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

export function mapTestimonials(translations: any[], mainItems: any[]) {
  const mainById = mainItems.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return acc;
  }, {});

  // Solo una traducción por testimonio (por idioma)
  const testimonialsById = translations.reduce((acc: any, item: any) => {
    const id = item.testimonial_vision_items_id;
    if (!acc[id]) acc[id] = item;
    return acc;
  }, {});

  return Object.values(testimonialsById).map((item: any) => {
    const main = mainById[item.testimonial_vision_items_id];
    return {
      id: item.testimonial_vision_items_id,
      role: item.role ?? "",
      testimonial: item.testimonial ?? "",
      verified_comment: item.verified_comment ?? "",
      name: main?.name ?? "",
      company: main?.company ?? "",
      rating: main?.rating ?? 0,
      avatar_link: main?.avatar_link ?? "",
    };
  });
}