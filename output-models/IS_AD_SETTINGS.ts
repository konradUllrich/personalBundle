import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_AD_SETTINGSAttributes {
    B_HIDE?: boolean;
    LUSERIDINSERT?: number;
    STR_NOTIFICATION?: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    FKLID?: number;
    STRID: string;
    STR_USER_GUID?: string;
    REF_IXUSER?: number;
    LUSERID?: number;
    B_NOTIFICATION?: boolean;
}

@Table({
	tableName: "IS_AD_SETTINGS",
	timestamps: false 
})
export class IS_AD_SETTINGS extends Model<IS_AD_SETTINGSAttributes, IS_AD_SETTINGSAttributes> implements IS_AD_SETTINGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NOTIFICATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USER_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_IXUSER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NOTIFICATION?: boolean;

}