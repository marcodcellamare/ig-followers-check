import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Floppy, Folder, FolderSymlink } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { useInfo } from '@providers/info';
import { saveFile, readFile } from '@utils/index';
import Config from '@config';
import File from '@components/Misc/File';
import Account from './Account';
import { v4 as uuidv4 } from 'uuid';

const Accounts = () => {
	const { i18n } = useTranslation();
	const {
		accountsFiltered,
		getRatingToFile,
		setRatingFromFile,
		selected,
		setSelected,
		page,
		openLink,
	} = useInfo();
	const [checkAll, setCheckAll] = useState(false);
	const [clickTrigger, setClickTrigger] = useState('');

	const openAll = useCallback(() => {
		if (selected.length > 0) {
			const toOpen = accountsFiltered.filter((a) =>
				selected.includes(a.value)
			);

			if (toOpen.length > 0) {
				toOpen.forEach((a) => openLink(a.value, a.href));
			}
		}
	}, [selected, accountsFiltered, openLink]);

	const onCheckAll = (c: boolean) => {
		setCheckAll(c);
	};

	const downloadRatings = () => {
		saveFile({
			content: getRatingToFile(),
			filename: 'ifc-' + new Date().toISOString() + '-ratings',
			extension: Config.data.extensions.ratings,
		});
	};
	const uploadRatings = (file: File) => {
		readFile(file, (content) => {
			setRatingFromFile(content);
		});
	};
	const uploadRatingsTrigger = () => {
		setClickTrigger(uuidv4());
	};

	useEffect(() => {
		setCheckAll(false);
		setSelected();
	}, [page, setSelected]);

	return (
		<section className='my-4'>
			<Helmet>
				<title>{i18n.t('ACCOUNTS')}</title>
			</Helmet>
			{accountsFiltered.length > 0 ? (
				<div className='table-responsive'>
					<table className='table table-sm table-hover'>
						<thead className='table-secondary'>
							<tr>
								<th
									scope='col'
									className='py-3'
									style={{ width: '1px' }}>
									<div className='form-check form-switch'>
										<input
											className='form-check-input'
											type='checkbox'
											role='switch'
											checked={checkAll}
											onChange={(e) =>
												onCheckAll(e.target.checked)
											}
										/>
									</div>
								</th>
								<th
									scope='col'
									className='text-end py-3 pe-2'
									style={{ width: '1px' }}>
									#
								</th>
								<th
									scope='col'
									style={{ width: '1px' }}
									className='text-nowrap py-3 pe-3'>
									<File
										hidden={true}
										accept={`.${Config.data.extensions.ratings}`}
										clickTrigger={clickTrigger}
										onFileSelected={uploadRatings}
									/>
									{i18n.t('RATING')}
									<span className='btn-group align-bottom ms-2'>
										<button
											className='btn btn-sm btn-outline-success p-1 lh-1'
											onClick={uploadRatingsTrigger}>
											<Folder />
										</button>
										<button
											className='btn btn-sm btn-outline-danger p-1 lh-1'
											onClick={downloadRatings}>
											<Floppy />
										</button>
									</span>
								</th>
								<th
									scope='col'
									className='text-nowrap py-3'>
									{i18n.t('ID')}
									<button
										className='btn btn-sm btn-outline-success p-1 lh-1 align-bottom ms-2'
										disabled={selected.length === 0}
										onClick={openAll}>
										<strong>{selected.length}</strong>{' '}
										<FolderSymlink />
									</button>
								</th>
								<th
									scope='col'
									className='py-3'
									style={{ width: '1px' }}
								/>
								<th
									scope='col'
									className='py-3'
									style={{ width: '1px' }}>
									{i18n.t('FOLLOWERS')}
								</th>
								<th
									scope='col'
									className='py-3'
									style={{ width: '1px' }}>
									{i18n.t('FOLLOWING')}
								</th>
							</tr>
						</thead>
						<tbody>
							{accountsFiltered.map((account, k) => {
								return (
									<Account
										key={k}
										k={k}
										account={account}
										checkAll={checkAll}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			) : (
				<p className='fw-bold text-danger'>{i18n.t('NO_RESULTS')}</p>
			)}
		</section>
	);
};
export default Accounts;
