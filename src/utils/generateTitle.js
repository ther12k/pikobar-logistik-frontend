// translate router.meta.title, be used in breadcrumb sidebar tagsview
import i18n from '@/lang'

export default function generateTitle(title) {
  const hasKey = i18n.t('route.' + title)

  if (hasKey) {
    const translatedTitle = i18n.t('route.' + title)

    return translatedTitle
  }
  return title
}
