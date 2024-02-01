import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSOBJECTAttributes {
    LID: number;
    LCONTAINERID?: number;
    STRNAME: string;
    LCLASSID: number;
    STRGUID: string;
    LPRIORITY: number;
    BDELETABLE: boolean;
    BDELETED: boolean;
    BDISABLED: boolean;
    LINTERNALUSN?: number;
    STRRPLGUID?: string;
    STRDN?: string;
    STRDESCRIPTION?: string;
    STREXTERNALGUID?: string;
}

@Table({
	tableName: "DSOBJECT",
	timestamps: false 
})
export class DSOBJECT extends Model<DSOBJECTAttributes, DSOBJECTAttributes> implements DSOBJECTAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LCONTAINERID?: number;

    @Column({
    	type: DataType.STRING(254) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LCLASSID!: number;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LPRIORITY!: number;

    @Column({
    	type: DataType.STRING 
    })
    	BDELETABLE!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BDELETED!: boolean;

    @Column({
    	type: DataType.STRING 
    })
    	BDISABLED!: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LINTERNALUSN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRRPLGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(512) 
    })
    	STRDN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(512) 
    })
    	STRDESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STREXTERNALGUID?: string;

}