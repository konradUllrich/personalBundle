import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TSK_CATEGORIESAttributes {
    TXT_DESCRIPTION?: string;
    DTINSERT?: Date;
    STR_COLOR_BACK?: string;
    B_CREATE_SHAREGROUP?: boolean;
    TXT_RESPONSIBLE?: string;
    L_FILEINFORMATION?: number;
    STRID: string;
    DT_TO?: Date;
    LUSERID?: number;
    STR_TITLE?: string;
    L_FILEINFORMATION_1?: number;
    B_ARCHIV?: boolean;
    STR_SHARE_GROUP?: string;
    B_NOTIFY?: boolean;
    B_CHANGE_DISTRIBUTOR?: boolean;
    DTEDIT?: Date;
    B_SHARE_GROUP?: boolean;
    LUSERIDINSERT?: number;
    B_CHANGE_RESP?: boolean;
    TXT_DISTRIBUTOR?: string;
    DT_FROM?: Date;
    STR_SICHTBARKEIT?: string;
    STR_COLOR_TEXT?: string;
}

@Table({
	tableName: "TSK_CATEGORIES",
	timestamps: false 
})
export class TSK_CATEGORIES extends Model<TSK_CATEGORIESAttributes, TSK_CATEGORIESAttributes> implements TSK_CATEGORIESAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_COLOR_BACK?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CREATE_SHAREGROUP?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_RESPONSIBLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_TO?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION_1?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ARCHIV?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SHARE_GROUP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NOTIFY?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CHANGE_DISTRIBUTOR?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SHARE_GROUP?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CHANGE_RESP?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DISTRIBUTOR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_FROM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SICHTBARKEIT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_COLOR_TEXT?: string;

}