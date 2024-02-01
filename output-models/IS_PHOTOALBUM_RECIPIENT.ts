import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_PHOTOALBUM_RECIPIENTAttributes {
    DTEDIT?: Date;
    LUSERID?: number;
    STR_RECIPIENTGUID?: string;
    STRID: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    FKSTRID?: string;
}

@Table({
	tableName: "IS_PHOTOALBUM_RECIPIENT",
	timestamps: false 
})
export class IS_PHOTOALBUM_RECIPIENT extends Model<IS_PHOTOALBUM_RECIPIENTAttributes, IS_PHOTOALBUM_RECIPIENTAttributes> implements IS_PHOTOALBUM_RECIPIENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RECIPIENTGUID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

}