import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_MODULESAttributes {
    B_MANDATORY?: boolean;
    STR_CSS_CLASS?: string;
    STR_PAGE_GUID?: string;
    LUSERIDINSERT?: number;
    STRID: string;
    DTEDIT?: Date;
    STR_LANG?: string;
    DTINSERT?: Date;
    STR_APPLICATION_GUID?: string;
    B_HIDE?: boolean;
    L_ORDER?: number;
    STR_NAME?: string;
    LUSERID?: number;
    STR_KEY?: string;
}

@Table({
	tableName: "IS_MODULES",
	timestamps: false 
})
export class IS_MODULES extends Model<IS_MODULESAttributes, IS_MODULESAttributes> implements IS_MODULESAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MANDATORY?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_CSS_CLASS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_PAGE_GUID?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LANG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_APPLICATION_GUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HIDE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KEY?: string;

}