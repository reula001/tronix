import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Home: "/",
      About: "/about",
      Projects: "/projects/",
      Contact: "/contact",
      Email: "mailto:rene@tronix.no",
      CV: "/cv",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [],
  right: [],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [],
  right: [],
}
