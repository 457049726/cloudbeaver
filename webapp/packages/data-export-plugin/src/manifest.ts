/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { IServiceInjector, PluginManifest } from '@dbeaver/core/di';

import { Bootstrap } from './Bootstrap';
import { DataExportMenuService } from './DataExportMenuService';
import { DataExportService } from './DataExportService';

export const manifest: PluginManifest = {
  info: {
    name: 'Data Viewer Plugin',
  },

  providers: [
    DataExportMenuService,
    DataExportService,
  ],

  async initialize(services: IServiceInjector) {
    services
      .resolveServiceByClass(Bootstrap)
      .bootstrap();
  },
};
