import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PHOTOALBUMAttributes {
    B_CANUPLOAD?: boolean;
    L_PREVIEW_IMAGE?: number;
    DTINSERT?: Date;
    STR_ORDER?: string;
    STR_PRIVACY_LEVEL?: string;
    REF_CREATOR_ID?: string;
    DT_LAST_CHANGE?: Date;
    B_CREATE_FEED?: boolean;
    B_CANDELETE?: boolean;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    STRID: string;
    STR_RANDOM_GUID?: string;
    REF_LAST_CHANGE_PROFILE_ID?: string;
    TXT_DESCRIPTION?: string;
    STR_TITLE?: string;
    DTEDIT?: Date;
}

@Table({
	tableName: "IS_PHOTOALBUM",
	timestamps: false 
})
export class IS_PHOTOALBUM extends Model<IS_PHOTOALBUMAttributes, IS_PHOTOALBUMAttributes> implements IS_PHOTOALBUMAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CANUPLOAD?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_PREVIEW_IMAGE?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORDER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PRIVACY_LEVEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_CREATOR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_LAST_CHANGE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CREATE_FEED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_CANDELETE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STR_RANDOM_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_LAST_CHANGE_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}