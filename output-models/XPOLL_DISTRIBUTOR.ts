import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface XPOLL_DISTRIBUTORAttributes {
    B_HAS_ANSWERED?: boolean;
    STR_NOTIFICATION?: string;
    B_NOTIFICATION?: boolean;
    FKLID?: number;
    DTEDIT?: Date;
    B_SENT?: boolean;
    STRID: string;
    STR_STATUS?: string;
    REF_USER_ID?: number;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    B_BY_USER?: boolean;
    DTINSERT?: Date;
    STR_GUID?: string;
}

@Table({
	tableName: "XPOLL_DISTRIBUTOR",
	timestamps: false 
})
export class XPOLL_DISTRIBUTOR extends Model<XPOLL_DISTRIBUTORAttributes, XPOLL_DISTRIBUTORAttributes> implements XPOLL_DISTRIBUTORAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HAS_ANSWERED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NOTIFICATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NOTIFICATION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SENT?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_USER_ID?: number;

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
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BY_USER?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GUID?: string;

}